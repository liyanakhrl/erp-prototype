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

  height: number = 300;
  width: number = 500;
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

    const svg = d3.select(`#${this.id}-svg`);
    svg.attr('viewBox', [
      x0 - root.dx - this.margin.left,
      0,
      0 - x0 + x1 + root.dx * 3 + this.margin.left + this.margin.right,
      (this.levels - 1) * (root.dy / 2) + this.margin.top + this.margin.bottom,
    ]);

    // Adds container for appended objects
    const g = svg
      .on('click', () => {
        this.selectedLink = null;
        this.selectedNode = null;
        this.hasSelectedNode = false;
        this.hasSelectedLink = false;
        this.changeDetectorRef.detectChanges();
      })
      .append('g')
      .attr('class', 'tree-container')
      .attr('transform', `translate(${root.dx / 3}, ${this.margin.top})`);

    // Adds background grid, 7 steps
    g.append('g')
      .attr('fill', 'none')
      .selectAll('rect')
      .data([0, 1, 2, 3, 4, 5, 6])
      .join('rect')
      .attr('x', x0 - root.dx / 2 - this.margin.left)
      .attr('y', (d) => (d * root.dy) / 2 - root.dy / 4)
      .attr(
        'width',
        0 - x0 + x1 + root.dx + this.margin.left + this.margin.right
      )
      .attr('height', root.dy / 2 - 1)
      .attr('fill', (d: number) => colors[d]);

    // Simplify the data coming from root.links(), to easily understand what data is used to create links
    this.links = root.links().map((data: any) => ({
      source: { x: data.source.x, y: data.source.y, depth: data.source.depth },
      target: { x: data.target.x, y: data.target.y, depth: data.target.depth },
      color: '#999999',
    }));

    // Add more link relationships
    this.links.push({
      source: {
        x: this.links[3].target.x,
        y: this.links[3].target.y,
        depth: this.links[3].target.depth,
      },
      target: {
        x: this.links[23].target.x,
        y: this.links[23].target.y,
        depth: this.links[23].target.depth,
      },
      color: '#fcc101', // green link
    });
    this.links.push({
      source: {
        x: this.links[1].target.x,
        y: this.links[1].target.y,
        depth: this.links[1].target.depth,
      },
      target: {
        x: this.links[19].target.x,
        y: this.links[19].target.y,
        depth: this.links[19].target.depth,
      },
      color: '#e85000', // red link
    });

    // Simplify the data coming from root.descendants(), to easily understand what data is used to create chart
    this.descendants = root.descendants().map((data: any) => ({
      children: !!data.children,
      data: { name: data.data.name },
      depth: data.depth,
      x: data.x,
      y: data.y,
    }));

    g.append('g').attr('class', 'node-links').attr('fill', 'none');

    const completed = this.updateChartLinks();

    // Link strokes
    const node = g
      .append('g')
      .attr('stroke-linejoin', 'round')
      .attr('stroke-width', 3)
      .selectAll('g')
      .data(this.descendants)
      .join('g')
      .attr('transform', (d: any) => `translate(${d.x},${d.y / 2})`);

    // Adds nodes
    node
      .append('circle')
      .attr('class', 'chart-node')
      .attr('fill', (d: any) => (d.children ? '#0070bd' : '#3fa142'))
      .attr('r', 2.5)
      .on('mouseover', (event: MouseEvent) => {
        d3.select(event.currentTarget as HTMLElement) // Cast to HTMLElement
          .attr('r', 3.5);
      })

      .on('mouseout', (event: MouseEvent) => {
        d3.select(event.currentTarget as HTMLElement).attr('r', 2.5);
      })
      .on('click', (event: MouseEvent, d: any) => {
        event.preventDefault();
        event.stopPropagation();
        this.nodeClickedEvent(event, d);
      });

    // Adds text labels for nodes
    node
      .append('text')
      .attr('font-family', 'sans-serif')
      .attr('font-size', 5)
      .attr('dy', '0.31em')
      .attr('x', -4)
      .attr('text-anchor', 'end')
      .attr('transform', 'rotate(-35)')
      .text((d: any) => d.data.name)
      .clone(true)
      .lower()
      .attr('stroke', (d: any) => colors[d.depth])
      .attr('stroke-opacity', '0.3');
  }

  updateChartLinks(): boolean {
    const nl = d3.select('.node-links');

    nl.selectAll('.node-link').remove();

    // Creates links between nodes
    nl.append('g')
      .attr('class', 'node-links')
      .attr('fill', 'none')
      .selectAll('path')
      .data(this.links)
      .join('path')
      .attr('class', 'node-link')
      .attr('stroke', (d: any) => d.color)
      .attr('stroke-width', 1)
      .attr(
        'd',
        (d: any) =>
          d3
            .linkVertical() // Generate link function
            .x((d: any) => d.x) // Define x-coordinate
            .y((d: any) => d.y / 2)(
            // Define y-coordinate
            d
          ) // Pass the data point to generate the path
      )
      .on('mouseover', (event: MouseEvent) => {
        d3.select(event.currentTarget as HTMLElement).attr('stroke-width', 2);
      })
      .on('mouseout', (event: MouseEvent) => {
        d3.select(event.currentTarget as HTMLElement).attr('stroke-width', 1);
      })
      .on('click', (event: MouseEvent, d: any) => {
        event.preventDefault();
        event.stopPropagation();
        this.linkClickedEvent(event, d);
      });

    return true;
  }

  // Converts RGB Array to Hex Array
  convertRgbArrayToHex(rgbs: string[]): string[] {
    if (!rgbs) {
      return [];
    }
    const hexValues: string[] = [];

    rgbs.forEach((rgb) => {
      if (rgb.slice(0, 3) === 'rgb') {
        const rgbValues = rgb.slice(4, rgb.length - 1).split(',');

        hexValues.push(
          `#${this.convertRGBToHex(rgbValues[0])}${this.convertRGBToHex(
            rgbValues[1]
          )}${this.convertRGBToHex(rgbValues[2])}`
        );
      } else {
        hexValues.push(rgb);
      }
    });

    return hexValues;
  }

  // Converts RGB Value to HEX
  convertRGBToHex(value: string): string {
    const hex = parseInt(value).toString(16);
    return hex.length == 1 ? '0' + hex : hex;
  }

  // Process clicked node event
  nodeClickedEvent(event: MouseEvent, data: any) {
    this.selectedLink = null;
    this.hasSelectedLink = false;

    if (!this.hasSelectedNode && !this.selectedNode) {
      this.selectedNode = data;
      this.hasSelectedNode = true;
    } else if (this.hasSelectedNode && this.selectedNode) {
      this.addLink(this.selectedNode, data, '#000000');
      this.selectedNode = null;
      this.hasSelectedNode = false;
    }
    this.changeDetectorRef.detectChanges();
  }

  addLink(node1: any, node2: any, linkColor: string) {
    const dupeLinks = this.links.filter(
      (link: any) =>
        (link.source.x === node1.x &&
          link.source.y === node1.y &&
          link.target.x === node2.x &&
          link.target.y === node2.y) ||
        (link.source.x === node2.x &&
          link.source.y === node2.y &&
          link.target.x === node1.x &&
          link.target.y === node1.y)
    );
    if (dupeLinks.length === 0) {
      const newLink = {
        source: {
          x: node1.x,
          y: node1.y,
          depth: node1.depth,
        },
        target: {
          x: node2.x,
          y: node2.y,
          depth: node2.depth,
        },
        color: linkColor,
      };

      this.links.push(newLink);
      this.updateChartLinks();
    } else {
      console.log('Duplicate Link found, not adding', dupeLinks);
    }
  }

  // Process clicked link event
  linkClickedEvent(event: MouseEvent, data: any) {
    this.selectedNode = null;
    this.hasSelectedNode = false;

    if (
      !this.hasSelectedLink ||
      (this.hasSelectedLink && this.selectedLink !== data)
    ) {
      this.selectedLink = data;
      this.hasSelectedLink = true;
    } else {
      this.selectedLink = null;
      this.hasSelectedLink = false;
    }
    this.changeDetectorRef.detectChanges();
  }

  deleteSelectedLink() {
    if (this.hasSelectedLink && this.selectedLink) {
      this.links.splice(this.links.indexOf(this.selectedLink), 1);
      this.selectedLink = null;
      this.hasSelectedLink = false;
      this.updateChartLinks();
    }
  }
  cancelSelectedNode() {
    this.hasSelectedNode = false;
    this.selectedNode = null;
  }

  // Returns all links for given node
  getNodeLinks(data: any): [] {
    const linkArray = this.links.filter(
      (link: any) =>
        (link.source.x === data.x && link.source.y === data.y) ||
        (link.target.x === data.x && link.target.y === data.y)
    );

    return linkArray;
  }

  // Returns connected nodes for a given link
  getNodes(data: any): [] {
    const descendantArray = this.descendants.filter(
      (descendant: any) =>
        (descendant.x === data.source.x && descendant.y === data.source.y) ||
        (descendant.x === data.target.x && descendant.y === data.target.y)
    );

    return descendantArray;
  }
}
