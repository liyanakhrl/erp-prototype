import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import * as d3 from 'd3';
import { treeData } from './tree-data';

// Increasing integer for generating unique ids for checkbox components.
let nextUniqueId = 0;

@Component({
  selector: 'app-org-chart',
  standalone: false,
  templateUrl: './organization-chart.component.html',
  styleUrls: ['./organization-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class OrganizationChartComponent implements AfterViewInit {
  private _uniqueId: string = `vdl-chart-bar-${++nextUniqueId}`;
  id = this._uniqueId;

  height: number = 800; //300;
  width: number = 1900; //500;
  levels = 7;
  selectedNode: any;
  hasSelectedNode!: boolean;
  selectedLink: any;
  hasSelectedLink!: boolean;

  links: any;
  descendants: any;

  tree = (data: any) => {
    const root: any = d3.hierarchy(data);
    root.dx = 10;
    root.dy = this.width / (root.height + 1);
    return d3.tree().nodeSize([root.dx, root.dy])(root);
  };
  margin = { top: 10, right: 40, bottom: 10, left: 40 };

  @ViewChild('chartContainer', { static: false })
  chartContainer!: ElementRef<HTMLElement>;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.createChart();
  }

  createChart() {
    const root: any = this.tree(treeData);

    // Zoom and Pan
    const svg = d3.select(`#${this.id}-svg`);
    const g = svg.append('g');
    // const zoom = d3
    //   .zoom<SVGSVGElement, unknown>()
    //   .scaleExtent([0.5, 2])
    //   .on('zoom', (event: d3.D3ZoomEvent<SVGSVGElement, unknown>) => {
    //     g.attr('transform', event.transform.toString()); // Fix: Convert transform to string
    //   });

    // svg.call(zoom as any);

    // sets color array for backgrounds
    const colors = this.convertRgbArrayToHex(
      d3.quantize((t) => d3.interpolateRdYlGn(t * 0.6 + 0.2), this.levels)
    ).reverse();

    let y0 = Infinity;
    let y1 = -y0;
    let x0 = Infinity;
    let x1 = -x0;

    root.each((d: any) => {
      if (d.x > x1) x1 = d.x; // gets max right
      if (d.x < x0) x0 = d.x; // gets max left
      if (d.y > y1) y1 = d.y; // gets max bottom
    });

    svg.attr('viewBox', [
      x0 - root.dx - this.margin.left,
      y0 - root.dy,
      x1 - x0 + this.margin.left + this.margin.right,
      y1 - y0 + this.margin.top + this.margin.bottom,
    ]);

    // Adds container for appended objects
    g.on('click', () => {
      this.resetSelections();
    })
      .attr('class', 'tree-container')
      .attr('transform', `translate(${root.dx * 15}, ${this.margin.top})`);

    // Adds background grid
    g.append('g')
      .attr('fill', 'none')
      .selectAll('rect')
      .data(d3.range(this.levels))
      .join('rect')
      .attr('x', x0 - root.dx / 2 - this.margin.left)
      .attr('y', (d) => (d * root.dy) / 2 - root.dy / 4)
      .attr('width', x1 - x0 + root.dx + this.margin.left + this.margin.right)
      .attr('height', root.dy / 2 - 1)
      .attr('fill', (d: number) => colors[d]);

    this.descendants = root.descendants().map((d: any) => ({
      ...d,
      x: d.x,
      y: d.y,
      data: d.data,
    }));

    this.initializeLinks(root);
    this.initializeNodes(g);
  }

  convertRgbArrayToHex(rgbs: string[]): string[] {
    return rgbs.map((rgb) => {
      const result = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/.exec(rgb);
      return result
        ? `#${(+result[1]).toString(16).padStart(2, '0')}${(+result[2])
            .toString(16)
            .padStart(2, '0')}${(+result[3]).toString(16).padStart(2, '0')}`
        : rgb;
    });
  }

  initializeLinks(root: any) {
    this.links = root.links().map((data: any) => ({
      source: { x: data.source.x, y: data.source.y, depth: data.source.depth },
      target: { x: data.target.x, y: data.target.y, depth: data.target.depth },
      color: '#999999',
    }));
    this.updateChartLinks();
  }

  initializeNodes(g: any) {
    const nodes = g.append('g').attr('class', 'nodes');

    nodes
      .selectAll('circle')
      .data(this.descendants)
      .join('circle')
      .attr('class', 'node')
      .attr('cx', (d: any) => d.x)
      .attr('cy', (d: any) => d.y / 2)
      .attr('r', 5)
      .attr('fill', (d: any) => (d.children ? '#0070bd' : '#3fa142'))
      .on('click', (event: MouseEvent, d: any) =>
        this.nodeClickedEvent(event, d)
      );

    nodes
      .selectAll('text')
      .data(this.descendants)
      .join('text')
      .attr('x', (d: any) => d.x + 10)
      .attr('y', (d: any) => d.y / 2)
      .attr('dy', '0.35em')
      .text((d: any) => d.data.name)
      .style('font-size', '12px')
      .style('fill', '#333');
  }

  updateChartLinks() {
    const linkGroup = d3
      .select('.tree-container')
      .append('g')
      .attr('class', 'links');

    linkGroup
      .selectAll('path')
      .data(this.links)
      .join('path')
      .attr('fill', 'none')
      .attr('stroke', (d: any) => d.color)
      .attr('stroke-width', 1.5)
      .attr(
        'd',
        d3
          .linkVertical<any, any>()
          .x((d: any) => d.x)
          .y((d: any) => d.y / 2)
      );
  }

  nodeClickedEvent(event: MouseEvent, d: any) {
    this.selectedNode = d;
    this.hasSelectedNode = true;
    this.changeDetectorRef.detectChanges();
  }

  resetSelections() {
    this.selectedLink = null;
    this.selectedNode = null;
    this.hasSelectedNode = false;
    this.hasSelectedLink = false;
    this.changeDetectorRef.detectChanges();
  }
}
