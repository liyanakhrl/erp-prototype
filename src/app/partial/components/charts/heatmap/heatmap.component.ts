import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'app-heatmap',
  standalone: false,
  templateUrl: `./heatmap.component.html`,
  styleUrl: './heatmap.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeatmapComponent implements OnInit {

  // Reference to the container for the heatmap
  @ViewChild('heatmapContainer') heatmapContainer: ElementRef | undefined;

  // Initial sample data
  data: number[][] = [
    [0, 0, 5], [0, 1, 15], [0, 2, 20], [0, 3, 25], [0, 4, 10],
    [1, 0, 30], [1, 1, 50], [1, 2, 40], [1, 3, 60], [1, 4, 35],
    [2, 0, 70], [2, 1, 80], [2, 2, 90], [2, 3, 100], [2, 4, 60],
    [3, 0, 110], [3, 1, 120], [3, 2, 130], [3, 3, 140], [3, 4, 115],
    [4, 0, 90], [4, 1, 95], [4, 2, 105], [4, 3, 110], [4, 4, 85],
    [5, 0, 60], [5, 1, 100], [5, 2, 120], [5, 3, 140], [5, 4, 130]
  ];

  constructor() { }

  ngOnInit(): void {
    this.drawHeatmap(this.data);
  }

  // Function to draw the heatmap
  drawHeatmap(data: number[][]): void {
    if (!this.heatmapContainer) return;

    const container = this.heatmapContainer.nativeElement;
    const width = 500;
    const height = 500;
    const colors = d3.scaleSequential(d3.interpolateYlOrRd).domain([0, 150]);

    // Clear previous heatmap if any
    d3.select(container).selectAll('*').remove();

    // Create SVG container for the heatmap
    const svg = d3.select(container)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    // Calculate the number of rows and columns dynamically
    const rows = d3.max(data, d => d[1]) ?? 0 + 1;
    const cols = d3.max(data, d => d[0]) ?? 0 + 1;


    // Calculate grid sizes dynamically
    const gridSizeX = width / cols;
    const gridSizeY = height / rows;

    // Create heatmap squares
    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', d => d[0] * gridSizeX)
      .attr('y', d => d[1] * gridSizeY)
      .attr('width', gridSizeX)
      .attr('height', gridSizeY)
      .attr('fill', d => colors(d[2]))
      .attr('stroke', '#ddd');

    // Add text values inside the grid cells (optional)
    svg.selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .attr('x', d => d[0] * gridSizeX + gridSizeX / 2)
      .attr('y', d => d[1] * gridSizeY + gridSizeY / 2)
      .attr('dy', '.35em')
      .attr('text-anchor', 'middle')
      .attr('fill', '#333')
      .text(d => d[2]);
  }

  // Update data and redraw the heatmap
  updateData(): void {
    // Simulate new dynamic data
    this.data = Array.from({ length: 6 }, (_, row) =>
      Array.from({ length: 5 }, (_, col) => [col, row, Math.floor(Math.random() * 150)])
    ).flat();

    this.drawHeatmap(this.data);
  }

}
