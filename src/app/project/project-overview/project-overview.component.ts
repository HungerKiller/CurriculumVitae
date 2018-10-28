import { Component, OnInit } from '@angular/core';
import { JsonReaderService } from '../../services/json-reader.service'
import { Project } from '../../models/Project';
import * as moment from 'moment';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.css']
})
export class ProjectOverviewComponent implements OnInit {

  projects: Project[] = [];
  cols: any[];
  options: any;
  projectNames: string[] = [];
  startDates: Date[] = [];
  endDates: Date[] = [];

  constructor(private jsonReaderService: JsonReaderService) { }

  ngOnInit() {
    this.jsonReaderService.getJSON("./assets/projects_cn.json").subscribe(data => {
      this.projects = data['projects'] as Project[];
      this.projects.forEach(p => this.projectNames.push(p.name));
      this.projects.forEach(p => this.startDates.push(this.convertStringToDate(p.startDate)));
      this.projects.forEach(p => this.endDates.push(this.convertStringToDate(p.endDate, true)));
      this.buildOption();
    });

    this.cols = [
      { field: 'name', header: 'Name', width: '30%' },
      { field: 'organization', header: 'Organization', width: '20%' },
      { field: 'city', header: 'City', width: '20%' },
      { field: 'startDate', header: 'StartDate', width: '15%' },
      { field: 'endDate', header: 'EndDate', width: '15%' }
    ];
  }

  private convertStringToDate(dateString: string, addingMonth: boolean = false) {
    let date = new Date(dateString);
    if (addingMonth)
      date.setDate(28);
    return date;
  }

  private buildOption() {
    this.options = {
      title: {
        text: '项目甘特图'
      },
      grid: {
        top: 50,
        width: '90%',
        height: '90%',
        left: 10,
        containLabel: true
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
          var res = params[0].name + "</br>"
          var date0 = params[0].data;
          var date1 = params[1].data;
          date0 = date0.getFullYear() + "-" + (date0.getMonth() + 1);
          date1 = date1.getFullYear() + "-" + (date1.getMonth() + 1);
          res += params[0].seriesName + ":" + date0 + "</br>"
          res += params[1].seriesName + ":" + date1 + "</br>"
          //console.log(params[0]);
          return res;
        }
      },
      xAxis: {
        type: 'time',
        position: "top"
      },
      yAxis: {
        type: "category",
        splitLine: { show: false },
        data: this.projectNames
      },
      series: [

        {
          name: '完成时间',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'inside'
            }
          },
          data: this.endDates
        },
        {
          name: '开始时间',
          type: 'bar',
          stack: '总量',
          itemStyle: {
            normal: {
              barBorderColor: 'rgba(255,255,255,1)',
              color: 'rgba(255,255,255,1)'
            }
          },
          data: this.startDates
        },
      ]
    };
  }
}