import { Component, OnInit } from '@angular/core';
import { JsonReaderService } from '../../services/json-reader.service'
import { MessageService } from '../../services/message.service';
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

  constructor(private jsonReaderService: JsonReaderService, private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.get().subscribe((msg) => {
      this.jsonReaderService.getJSON(`./assets/json/projects_${msg}.json`).subscribe(data => {
        this.projects = data['projects'] as Project[];
        this.projectNames = [];
        this.startDates = [];
        this.endDates = [];
        this.projects.forEach(p => this.projectNames.push(p.name));
        this.projects.forEach(p => this.startDates.push(this.convertStringToDate(p.startDate)));
        this.projects.forEach(p => this.endDates.push(this.convertStringToDate(p.endDate, true)));
        this.buildOption();
      });
    });
    this.messageService.setSame();
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

        axisLabel: {
          interval: 0,//标签设置为全部显示
          formatter: function (params) {
            var newParamsName = "";// 最终拼接成的字符串
            var paramsNameNumber = params.length;// 实际标签的个数
            var provideNumber = 70;// 每行能显示的字的个数
            var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
            /**
             * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
             */
            // 条件等同于rowNumber>1
            if (paramsNameNumber > provideNumber) {
              /** 循环每一行,p表示行 */
              for (var p = 0; p < rowNumber; p++) {
                var tempStr = "";// 表示每一次截取的字符串
                var start = p * provideNumber;// 开始截取的位置
                var end = start + provideNumber;// 结束截取的位置
                // 此处特殊处理最后一行的索引值
                if (p == rowNumber - 1) {
                  // 最后一次不换行
                  tempStr = params.substring(start, paramsNameNumber);
                } else {
                  // 每一次拼接字符串并换行
                  tempStr = params.substring(start, end) + "\n";
                }
                newParamsName += tempStr;// 最终拼成的字符串
              }

            } else {
              // 将旧标签的值赋给新标签
              newParamsName = params;
            }
            //将最终的字符串返回
            return newParamsName
          }
        },
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