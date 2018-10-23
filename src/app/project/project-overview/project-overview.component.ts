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
  date: Date;

  constructor(private jsonReaderService: JsonReaderService) { }

  ngOnInit() {
    this.jsonReaderService.getJSON("./assets/projects_cn.json").subscribe(data => {
      this.projects = data['projects'] as Project[];

      this.date = new Date(this.projects[0].startDate);
      this.date.setMonth(this.date.getMonth() + 1);

      var day = moment(this.projects[0].startDate).add(1, 'month');
      console.log(day);

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

  private buildOption()
  {
    this.options = {
      title: {
        text: '工作流甘特图'
      },
      legend: {
        data: ['计划完成时间', '实际完成时间']

      },
      xAxis: {
        type: 'time',
        position: "top"
      },

      yAxis: {
        type: "category",
        data: ['测试', '开发', '设计', '总进度']

      },
      tooltip: {
        trigger: 'axis',
        formatter: function(params) {
          var res = params[0].name + "</br>"
          var date0 = params[0].data;
          var date1 = params[1].data;
          var date2 = params[2].data;
          date0 = date0.getFullYear() + "-" + (date0.getMonth() + 1) + "-" + date0.getDate();
          date1 = date1.getFullYear() + "-" + (date1.getMonth() + 1) + "-" + date1.getDate();
          date2 = date2.getFullYear() + "-" + (date2.getMonth() + 1) + "-" + date2.getDate();
          res += params[0].seriesName + ":" + date0 + "</br>"
          res += params[1].seriesName + ":" + date1 + "</br>"
          res += params[2].seriesName + ":" + date2 + "</br>"
          //console.log(params[0]);
          return res;
        }
      },
      series: [
        {
          name: '计划开始时间',
          type: 'bar',
          stack: '总量',
          itemStyle: {
            normal: {
              color: 'rgba(0,0,0,0)'
            }
          },
          data: [
            new Date("2017/09/23"),
            new Date("2017/09/10"),
            new Date("2017/09/1"),
            new Date("2017/09/1"),

          ]
        },


        {
          name: '计划完成时间',
          type: 'bar',
          stack: '总量',
          data: [
            new Date("2017/09/31"),
            new Date("2017/09/20"),
            new Date("2017/09/15"),
            new Date("2017/09/30"),


          ]
        }, {
          name: '实际完成时间',
          type: 'bar',
          stack: '总量',
          data: [
            new Date("2017/09/30"),
            new Date("2017/09/23"),
            new Date("2017/09/14"),
            new Date("2017/09/30"),

          ]
        }
      ]
    };
  }
}
