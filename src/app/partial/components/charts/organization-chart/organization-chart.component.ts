import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
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
export class OrganizationChartComponent implements OnInit {
  @ViewChild('treeSvg', { static: true }) treeSvg!: ElementRef<SVGElement>;
  private counter: number = 0;
  private margin = { top: 20, right: 120, bottom: 30, left: 120 };
  private width = 1000 - this.margin.left - this.margin.right;
  private height = 600 - this.margin.top - this.margin.bottom;

  private svg: any;
  private tree: any;
  private root: any;

  ngOnInit(): void {
    this.createSvg();
    this.createTree(treeData); 
  }

  private createSvg(): void {
    this.svg = d3
      .select(this.treeSvg.nativeElement)
      .attr('width', '100%')
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr('transform', `translate(${this.margin.left},${this.margin.top})`);
  }

  private createTree(data: any): void {
    this.tree = d3.tree().size([this.height, this.width]);

    this.root = d3.hierarchy(data, (d: any) => d.children);
    this.root.x0 = this.height / 2;
    this.root.y0 = 0;

    this.update(this.root);
  }

  update = (source: any) => {
    const treeData = this.tree(this.root);
    const nodes = treeData.descendants();
    const links = treeData.links();

    // Adjust node spacing
    nodes.forEach((d: any) => (d.y = d.depth * 180));

    // Bind data for nodes
    const node = this.svg
      .selectAll('g.node')
      .data(nodes, (d: any) => d.id || (d.id = ++this.counter));

    // Enter new nodes
    const nodeEnter = node
      .enter()
      .append('g')
      .attr('class', 'node')
      .attr('transform', (d: any) => `translate(${source.y0},${source.x0})`)
      .on('click', (event: any, d: any) => {
        if (d.children || d._children) {
          this.toggleChildren(d); // Toggle direct children and grandchildren
        } else if (!d.parent) {
          this.toggleAll(this.root); // Toggle the entire tree for the root node
        }
        this.update(d); // Update visualization
      });

    nodeEnter
      .append('circle')
      .attr('class', 'node-circle')
      .attr('r', 10)
      .style('fill', (d: any) => (d._children ? '#555' : '#fff'));

    nodeEnter
      .append('text')
      .attr('dy', '.35em')
      .attr('x', (d: any) => (d.children || d._children ? -13 : 13))
      .attr('text-anchor', (d: any) =>
        d.children || d._children ? 'end' : 'start'
      )
      .text((d: any) => d.data.name);

    const nodeUpdate = nodeEnter.merge(node);

    nodeUpdate
      .transition()
      .duration(200)
      .attr('transform', (d: any) => `translate(${d.y},${d.x})`);

    nodeUpdate
      .select('circle.node-circle')
      .attr('r', 10)
      .style('fill', (d: any) => (d._children ? '#555' : '#fff'))
      .attr('cursor', 'pointer');

    const nodeExit = node
      .exit()
      .transition()
      .duration(200)
      .attr('transform', (d: any) => `translate(${source.y},${source.x})`)
      .remove();

    nodeExit.select('circle').attr('r', 0);

    // Bind data for links
    const link = this.svg
      .selectAll('path.link')
      .data(links, (d: any) => d.target.id);

    // Enter new links with curved paths
    const linkEnter = link
      .enter()
      .insert('path', 'g')
      .attr('class', 'link')
      .attr('stroke', '#ccc') // Line color
      .attr('stroke-width', 2) // Line thickness
      .attr('fill', 'none') // No fill for the path
      .attr('d', (d: any) => {
        const o = { x: source.x0, y: source.y0 };
        return `M${o.y},${o.x}C${o.y + (d.target.y - o.y) / 2},${o.x} ${
          d.target.y - (d.target.y - o.y) / 2
        },${d.target.x} ${d.target.y},${d.target.x}`;
      });

    // Update links with curved paths
    link
      .merge(linkEnter)
      .transition()
      .duration(200)
      .attr('d', (d: any) => {
        return `M${d.source.y},${d.source.x}C${
          d.source.y + (d.target.y - d.source.y) / 2
        },${d.source.x} ${d.target.y - (d.target.y - d.source.y) / 2},${
          d.target.x
        } ${d.target.y},${d.target.x}`;
      });

    // Remove exiting links
    link
      .exit()
      .transition()
      .duration(200)
      .attr('d', (d: any) => {
        const o = { x: source.x, y: source.y };
        return `M${o.y},${o.x}L${o.y},${o.x}`;
      })
      .remove();

    // Save positions for transitions
    nodes.forEach((d: any) => {
      d.x0 = d.x;
      d.y0 = d.y;
    });
  };

  private diagonal(source: any, target: any): string { // Weird lines
    // const midY = (source.y + target.y) / 2; // Midpoint for curvature
    // return `M ${source.y} ${source.x}
    //       C ${midY} ${source.x},
    //         ${midY} ${target.x},
    //         ${target.y} ${target.x}`;
    return `M ${source.y} ${source.x} L ${target.y} ${target.x}`; // straight line
    // return `M ${source.y} ${source.x} // weird line
    //   C ${(source.y + target.y) / 2} ${source.x},
    //     ${(source.y + target.y) / 2} ${target.x},
    //     ${target.y} ${target.x}`;
  }

  private toggleAll(node: any): void {
    if (node.children) {
      node._children = node.children;
      node.children = null;
    } else if (node._children) {
      node.children = node._children;
      node._children = null;
    }
    if (node.children || node._children) {
      (node.children || node._children).forEach((child: any) =>
        this.toggleAll(child)
      );
    }
  }

  toggleChildren(node: any) {
    if (node.children) {
      // Collapse all children and store them in _children
      node._children = node.children;
      node.children = null;
    } else if (node._children) {
      // Expand children from _children
      node.children = node._children;
      node._children = null;

      // Optionally expand grandchildren
      node.children.forEach((child: any) => {
        if (child._children) {
          this.toggleChildren(child); // Recursively expand grandchildren
        }
      });
    }
  }
}
