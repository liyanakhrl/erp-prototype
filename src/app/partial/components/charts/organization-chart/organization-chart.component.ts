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
  private margin = { top: 20, right: 34, bottom: 30, left: 25 };
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
    this.tree = d3
      .tree()
      .size([this.height, this.width])
      .separation((a, b) => {
        // Ensure enough spacing between siblings and non-siblings
        if (a.parent === b.parent) {
          return 1.5; // Siblings have tighter spacing
        } else {
          return 2; // Non-siblings have wider spacing
        }
      });

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
    nodes.forEach((d: any) => (d.y = d.depth * 180)); // Adjust horizontal spacing based on depth

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
        this.toggleChildren(d);
        this.update(d);
      });

    // Append image to the node
    const image = nodeEnter
      .append('image')
      .attr('xlink:href', (d: any) => d.data.image) // Image URL from data
      .attr('x', (d: any) => (d.depth > -1 ? -20 : -15)) // Adjust for side-by-side for depth > 2
      .attr('y', (d: any) => (d.depth > -1 ? -10 : -15)) // Adjust for side-by-side for depth > 2
      .attr('width', 30) // Default width
      .attr('height', 30) // Default height
      .on('mouseover', function (this: SVGImageElement, event: MouseEvent) {
        d3.select(this)
          .attr('width', 50)
          .attr('height', 50)
          .attr('x', (d: any) => (d.depth > -1 ? -25 : -15))
          .attr('y', (d: any) => (d.depth > -1 ? -25 : -15));
      })
      .on('mouseout', function (this: SVGImageElement, event: MouseEvent) {
        d3.select(this)
          .attr('width', 30)
          .attr('height', 30)
          .attr('x', (d: any) => (d.depth > -1 ? -20 : -15))
          .attr('y', (d: any) => (d.depth > -1 ? -10 : -15));
      });

    const nameText = nodeEnter
      .append('g') // Grouping to combine rect and text
      .attr('class', 'node-name-group')



    nameText
      .append('rect') // Adding the rectangle as the background
      .attr('x', (d: any) => (d.depth > -1 ? 20 : -d.data.name.length * 3)) // Adjust X based on the text length for padding
      .attr('y', (d: any) => (d.depth > -1 ? -15 : 5)) // Adjust Y for vertical padding
      .attr('width', (d: any) => d.data.name.length * 7) // Set width according to the name length
      .attr('height', (d: any) => (d.depth > -1 ? 18 : 25))  // Set height of the background
      .attr('rx', '5') // Rounded corners
      .attr('ry', '5') // Rounded corners
      .style('fill', '#c2c2c2') // Grey background color
      .style('stroke', 'black') // Optional: black border color
      .style('stroke-width', '1'); // Optional: border width

    nameText
      .append('text') // Appending text element
      .attr('class', 'node-name')
      .attr('x', (d: any) => (d.depth > -1 ? 20 : 0)) // Move text to the right for depth > 2
      .attr('y', (d: any) => (d.depth > -1 ? 0 : 25)) // Align vertically for depth > 2
      .attr('text-anchor', (d: any) => (d.depth > -1 ? 'start' : 'middle')) // Align text to the right for depth > 2
      .text((d: any) => `  ${d.data.name}`) // Display the name
      .style('font-size', '12px') // Font size for text
    // Append role text
    const roleText = nodeEnter
      .append('text')
      .attr('class', 'node-role')
      .attr('x', (d: any) => (d.depth > -1 ? 20 : 0)) // Move role text to the right for depth > 2
      .attr('y', (d: any) => (d.depth > -1 ? 15 : 55)) // Position below the name for depth > 2
      .attr('text-anchor', (d: any) => (d.depth > -1 ? 'start' : 'middle')) // Align text to the right for depth > 2
      .text((d: any) => d.data.role) // Display the role
      .style('font-size', '10px')
      .style('fill', '#666'); // Optional: lighter color for roles



    // Transition nodes to their new positions
    const nodeUpdate = nodeEnter.merge(node);

    nodeUpdate
      .transition()
      .duration(200)
      .attr('transform', (d: any) => `translate(${d.y},${d.x})`);

    // Remove exiting nodes
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
      .attr('stroke', '#ccc')
      .attr('stroke-width', 2)
      .attr('fill', 'none')
      .attr('d', (d: any) => {
        const o = { x: source.x0, y: source.y0 };
        return `M${o.y},${o.x}C${o.y + (d.target.y - o.y) / 2},${o.x} ${d.target.y - (d.target.y - o.y) / 2
          },${d.target.x} ${d.target.y},${d.target.x}`;
      });

    // Update links
    link
      .merge(linkEnter)
      .transition()
      .duration(200)
      .attr('d', (d: any) => {
        return `M${d.source.y},${d.source.x}C${d.source.y + (d.target.y - d.source.y) / 2
          },${d.source.x} ${d.target.y - (d.target.y - d.source.y) / 2},${d.target.x
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

  // update = (source: any) => {
  //   const treeData = this.tree(this.root);
  //   const nodes = treeData.descendants();
  //   const links = treeData.links();

  //   // Adjust node spacing
  //   nodes.forEach((d: any) => (d.y = d.depth * 180));

  //   // Bind data for nodes
  //   const node = this.svg
  //     .selectAll('g.node')
  //     .data(nodes, (d: any) => d.id || (d.id = ++this.counter));

  //   const nodeEnter = node
  //     .enter()
  //     .append('g')
  //     .attr('class', 'node')
  //     .attr('transform', (d: any) => `translate(${source.x0},${source.y0})`)
  //     .on('click', (event: any, d: any) => {
  //       if (d.children || d._children) {
  //         this.toggleChildren(d);
  //       }
  //       this.update(d);
  //     });

  //   // Append image to the node
  //   nodeEnter
  //     .append('image')
  //     .attr('xlink:href', (d: any) => d.data.image) // Image URL from data
  //     .attr('x', -15) // Center the image horizontally
  //     .attr('y', -15) // Position above the text
  //     .attr('width', 20) // Image width
  //     .attr('height', 20) // Image height
  //     .on('mouseover', function (this: SVGImageElement, event: MouseEvent) {
  //       d3.select(this) // 'this' is explicitly typed as SVGImageElement
  //         .attr('x', -15) // Enlarge image horizontally
  //         .attr('y', -15) // Enlarge image vertically
  //         .attr('width', 20) // Enlarge width
  //         .attr('height', 20); // Enlarge height
  //     })
  //     .on('mouseout', function (this: SVGImageElement, event: MouseEvent) {
  //       d3.select(this)
  //         .attr('x', -15) // Restore default position horizontally
  //         .attr('y', -15) // Restore default position vertically
  //         .attr('width', 20) // Restore default width
  //         .attr('height', 20); // Restore default height
  //     });

  //   // Append name text below the image
  //   nodeEnter
  //     .append('text')
  //     .attr('class', 'node-name')
  //     .attr('y', 35) // Position just below the image
  //     .attr('text-anchor', 'middle') // Center text
  //     .text((d: any) => d.data.name) // Display name
  //     .style('font-size', '12px');

  //   // Append role text below the name
  //   nodeEnter
  //     .append('text')
  //     .attr('class', 'node-role')
  //     .attr('y', 20) // Position below the name
  //     .attr('text-anchor', 'middle') // Center text
  //     .text((d: any) => d.data.role) // Display role
  //     .style('font-size', '10px')
  //     .style('fill', '#666'); // Optional: gray color for role

  //   nodeEnter
  //     .transition()
  //     .duration(200)
  //     .attr('transform', (d: any) => `translate(${d.y},${d.x})`); // Ensure nodes are correctly spaced

  //   const nodeUpdate = nodeEnter.merge(node);

  //   nodeUpdate
  //     .transition()
  //     .duration(200)
  //     .attr('transform', (d: any) => `translate(${d.y},${d.x})`);

  //   nodeUpdate
  //     .select('circle.node-circle')
  //     .attr('r', 10)
  //     .style('fill', (d: any) => (d._children ? '#555' : '#fff'))
  //     .attr('cursor', 'pointer');

  //   const nodeExit = node
  //     .exit()
  //     .transition()
  //     .duration(200)
  //     .attr('transform', (d: any) => `translate(${source.y},${source.x})`)
  //     .remove();

  //   nodeExit.select('circle').attr('r', 0);

  //   // Bind data for links
  //   const link = this.svg
  //     .selectAll('path.link')
  //     .data(links, (d: any) => d.target.id);

  //   // Enter new links with curved paths
  //   const linkEnter = link
  //     .enter()
  //     .insert('path', 'g')
  //     .attr('class', 'link')
  //     .attr('stroke', '#ccc') // Line color
  //     .attr('stroke-width', 2) // Line thickness
  //     .attr('fill', 'none') // No fill for the path
  //     .attr('d', (d: any) => {
  //       const o = { x: source.x0, y: source.y0 };
  //       return `M${o.y},${o.x}C${o.y + (d.target.y - o.y) / 2},${o.x} ${
  //         d.target.y - (d.target.y - o.y) / 2
  //       },${d.target.x} ${d.target.y},${d.target.x}`;
  //     });

  //   // Update links with curved paths
  //   link
  //     .merge(linkEnter)
  //     .transition()
  //     .duration(200)
  //     .attr('d', (d: any) => {
  //       // return `M${d.source.y},${d.source.x}L${d.target.y},${d.target.x}`; // straight line
  //       return `M${d.source.y},${d.source.x}C${
  //         d.source.y + (d.target.y - d.source.y) / 2
  //       },${d.source.x} ${d.target.y - (d.target.y - d.source.y) / 2},${
  //         d.target.x
  //       } ${d.target.y},${d.target.x}`;
  //     });

  //   // Remove exiting links
  //   link
  //     .exit()
  //     .transition()
  //     .duration(200)
  //     .attr('d', (d: any) => {
  //       const o = { x: source.x, y: source.y };
  //       return `M${o.y},${o.x}L${o.y},${o.x}`;
  //     })
  //     .remove();

  //   // Save positions for transitions
  //   nodes.forEach((d: any) => {
  //     d.x0 = d.x;
  //     d.y0 = d.y;
  //   });
  // };

  private diagonal(source: any, target: any): string {
    // Weird lines
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
