import { Component, OnInit } from '@angular/core';
import { JsonReaderService } from '../../services/json-reader.service'
import { YearTechnique } from '../../models/YearTechnique';

@Component({
  selector: 'app-project-statistics',
  templateUrl: './project-statistics.component.html',
  styleUrls: ['./project-statistics.component.css']
})
export class ProjectStatisticsComponent implements OnInit {

  yearTechniques: YearTechnique[] = [];
  years: string[] = [];
  techniques: string[] = [];

  option2D: any;
  option2DRatio: any;
  option3D: any;

  constructor(private jsonReaderService: JsonReaderService) { }

  ngOnInit() {
    this.jsonReaderService.getJSON(`./assets/json/tech.json`).subscribe(data => {
      this.yearTechniques = data['yearTechniques'] as YearTechnique[];
      this.yearTechniques.forEach(y => this.years.push(y.year));
      this.yearTechniques[0].techniques.forEach(t => this.techniques.push(t.name));
      this.buildOption2D();
      this.buildOption2DRatio();
      this.buildOption3D();
    });
  }

  private buildOption2DRatio() {
    let cpp: number = 0;
    let java: number = 0;
    let php: number = 0;
    let csharp: number = 0;
    let angular: number = 0;
    this.yearTechniques.forEach(y => {
      y.techniques.forEach(t => {
        switch (t.name) {
          case "C/C++":
            cpp += Number(t.hours);
            break;
          case "Java":
            java += Number(t.hours);
            break;
          case "PHP":
            php += Number(t.hours);
            break;
          case "C#.Net":
            csharp += Number(t.hours);
            break;
          case "Angular":
            angular += Number(t.hours);
            break;
          default:
            break;
        }
      });
    });

    this.option2DRatio = {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        data: this.techniques
      },
      series: [
        {
          name: 'Working Hours',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          data: [
            { value: cpp, name: this.techniques[0] },
            { value: java, name: this.techniques[1] },
            { value: php, name: this.techniques[2] },
            { value: csharp, name: this.techniques[3] },
            { value: angular, name: this.techniques[4] }
          ]
        }
      ]
    };
  }

  private buildOption2D() {
    let cpp: number[] = [];
    let java: number[] = [];
    let php: number[] = [];
    let csharp: number[] = [];
    let angular: number[] = [];
    this.yearTechniques.forEach(y => {
      y.techniques.forEach(t => {
        switch (t.name) {
          case "C/C++":
            cpp.push(t.hours);
            break;
          case "Java":
            java.push(t.hours);
            break;
          case "PHP":
            php.push(t.hours);
            break;
          case "C#.Net":
            csharp.push(t.hours);
            break;
          case "Angular":
            angular.push(t.hours);
            break;
          default:
            break;
        }
      });
    });
    this.option2D = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        data: this.techniques
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: this.years
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: this.techniques[0],
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'insideTop'
            }
          },
          data: cpp
        },
        {
          name: this.techniques[1],
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'insideTop'
            }
          },
          data: java
        },
        {
          name: this.techniques[2],
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'insideTop'
            }
          },
          data: php
        },
        {
          name: this.techniques[3],
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'insideTop'
            }
          },
          data: csharp
        },
        {
          name: this.techniques[4],
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          data: angular
        }
      ]
    };
  }

  private buildOption3D() {
    let data: number[][] = [];
    for (let i = 0; i < this.yearTechniques.length; i++) {
      for (let j = 0; j < this.yearTechniques[i].techniques.length; j++) {
        data.push([i, j, this.yearTechniques[i].techniques[j].hours]);
      }
    }
    this.option3D = {
      tooltip: {},
      visualMap: {
        max: 3000,
        inRange: {
          color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        }
      },
      xAxis3D: {
        type: 'category',
        name: 'Technique',
        data: this.techniques
      },
      yAxis3D: {
        type: 'category',
        name: 'Year',
        data: this.years
      },
      zAxis3D: {
        type: 'value',
        name: 'Hours',
      },
      grid3D: {
        boxDepth: 80,
        viewControl: {
          // projection: 'orthographic'
        },
        light: {
          main: {
            intensity: 1.2,
            shadow: true
          },
          ambient: {
            intensity: 0.3
          }
        }
      },
      series: [{
        type: 'bar3D',
        name: 'Working Hours',
        data: data.map(function (item) {
          return {
            value: [item[1], item[0], item[2]],
          }
        }),
        shading: 'lambert',

        label: {
          textStyle: {
            fontSize: 16,
            borderWidth: 1
          }
        },
        itemStyle: {
          opacity: 0.8
        },
        emphasis: {
          label: {
            textStyle: {
              fontSize: 20,
              color: '#900'
            }
          },
          itemStyle: {
            color: '#900'
          }
        }
      }]
    }
  }
}
