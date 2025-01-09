import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3';
@Component({
  selector: 'app-line-chart',
  standalone: false,

  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss',
})
export class LineChartComponent implements OnInit {
  @ViewChild('lineChart', { static: true }) chartContainer!: ElementRef;

  data = [
    { date: '2023-01-01', value: 30 },
    { date: '2023-02-01', value: 50 },
    { date: '2023-03-01', value: 70 },
    { date: '2023-04-01', value: 90 },
    { date: '2023-05-01', value: 110 },
  ];

  ngOnInit(): void {
    this.createChart();
  }

  private createChart(): void {
    // Parse dates
    const parseDate = d3.timeParse('%Y-%m-%d');
    const data = this.data.map((d) => ({ ...d, date: parseDate(d.date) }));
    const validData = data.filter((d) => d.date !== null) as {
      date: Date;
      value: number;
    }[];

    // Set dimensions
    const margin = { top: 20, right: 30, bottom: 50, left: 50 };
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // Create SVG container
    const svg = d3
      .select('#lineChart')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Scales
    const xScale = d3
      .scaleTime()
      .domain(d3.extent(data, (d) => d.date) as [Date, Date])
      .range([0, width]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value) as number])
      .range([height, 0]);

    // Axes
    const xAxis = d3.axisBottom(xScale).ticks(5);
    const yAxis = d3.axisLeft(yScale);

    svg.append('g').attr('transform', `translate(0,${height})`).call(xAxis);
    svg.append('g').call(yAxis);

    // Line generator
    const line = d3
      .line<{ date: Date; value: number }>()
      .x((d) => xScale(d.date))
      .y((d) => yScale(d.value))
      .curve(d3.curveMonotoneX);

    // Append the line
    const pathData = line(validData);
    if (pathData) {
      svg
        .append('path')
        .datum(validData)
        .attr('fill', 'none')
        .attr('stroke', '#4F46E5') // Tailwind indigo-600
        .attr('stroke-width', 2)
        .attr('d', pathData);
    }

    // Add points
    svg
      .selectAll('circle')
      .data(validData)
      .enter()
      .append('circle')
      .attr('cx', (d) => xScale(d.date)) // `d.date` is guaranteed to be a valid `Date` here
      .attr('cy', (d) => yScale(d.value))
      .attr('r', 4)
      .attr('fill', '#4F46E5');
  }
}
