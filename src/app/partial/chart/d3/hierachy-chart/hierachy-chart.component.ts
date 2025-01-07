import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
 

@Component({
  selector: 'app-hierachy-chart',
  standalone: false,

  templateUrl: './hierachy-chart.component.html',
  styleUrl: './hierachy-chart.component.scss',
})
export class HierachyChartComponent implements OnInit {
  chart: any;
  data = {
    name: 'Lao Lao',
    title: 'General Manager',
    children: [
      {
        name: 'Bo Miao',
        title: 'Department Manager',
        className: 'middle-level',
        children: [
          {
            name: 'Li Jing',
            title: 'Senior Engineer',
            className: 'product-dept',
          },
          {
            name: 'Li Xin',
            title: 'Senior Engineer',
            className: 'product-dept',
            children: [
              {
                name: 'To To',
                title: 'Engineer',
                className: 'pipeline1',
              },
              {
                name: 'Fei Fei',
                title: 'Engineer',
                className: 'pipeline1',
              },
              {
                name: 'Xuan Xuan',
                title: 'Engineer',
                className: 'pipeline1',
              },
            ],
          },
        ],
      },
      {
        name: 'Su Miao',
        title: 'Department Manager',
        className: 'middle-level',
        children: [
          {
            name: 'Pang Pang',
            title: 'Senior Engineer',
            className: 'rd-dept',
          },
          {
            name: 'Hei Hei',
            title: 'Senior Engineer',
            className: 'rd-dept',
            children: [
              {
                name: 'Xiang Xiang',
                title: 'UE Engineer',
                className: 'frontend1',
              },
              {
                name: 'Dan Dan',
                title: 'Engineer',
                className: 'frontend1',
              },
              {
                name: 'Zai Zai',
                title: 'Engineer',
                className: 'frontend1',
              },
            ],
          },
        ],
      },
    ],
  };

  ngOnInit(): void {
    // this.loadChart();
  }

  // loadChart(): void {
  //   this.chart = new OrgChart()
  //     .nodeHeight((d: any) => 85 + 25)
  //     .nodeWidth((d: any) => 220 + 2)
  //     .childrenMargin((d: any) => 50)
  //     .compactMarginBetween((d: any) => 35)
  //     .compactMarginPair((d: any) => 30)
  //     .neighbourMargin((a: any, b: any) => 20)
  //     .nodeContent(function (d: any) {
  //       const color = '#FFFFFF';
  //       const imageDiffVert = 25 + 2;
  //       return `
  //         <div style='width:${
  //           d.width
  //         }px;height:${d.height}px;padding-top:${imageDiffVert - 2}px;padding-left:1px;padding-right:1px'>
  //           <div style="font-family: 'Inter', sans-serif;background-color:${color};  margin-left:-1px;width:${d.width - 2}px;height:${d.height - imageDiffVert}px;border-radius:10px;border: 1px solid #E4E2E9">
  //             <div style="display:flex;justify-content:flex-end;margin-top:5px;margin-right:8px">#${
  //               d.data.id
  //             }</div>
  //             <div style="background-color:${color};margin-top:${-imageDiffVert - 20}px;margin-left:${15}px;border-radius:100px;width:50px;height:50px;" ></div>
  //             <div style="margin-top:${
  //               -imageDiffVert - 20
  //             }px;"> <img src="${d.data.image}" style="margin-left:${20}px;border-radius:100px;width:40px;height:40px;" /></div>
  //             <div style="font-size:15px;color:#08011E;margin-left:20px;margin-top:10px">  ${
  //               d.data.name
  //             } </div>
  //             <div style="color:#716E7B;margin-left:20px;margin-top:3px;font-size:10px;"> ${
  //               d.data.position
  //             } </div>
  //           </div>
  //         </div>
  //       `;
  //     })
  //     .container('.chart-container')
  //     .data(this.data)
  //     .render();
  // }

  // fitToScreen(): void {
  //   if (this.chart) {
  //     this.chart.fit();
  //   }
  // }
}
