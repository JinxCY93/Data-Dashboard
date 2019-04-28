import { Component, OnInit } from '@angular/core';
import data from '../../data'

@Component({
  selector: 'app-pie-chart2',
  templateUrl: './pie-chart2.component.html',
  styleUrls: ['./pie-chart2.component.css']
})
export class PieChart2Component implements OnInit {
  chartType = "pie"
  chartData = []
  chartLabels = []
  constructor() { }

  ngOnInit() {

    let dataset = []
    let tagCount = {}
    for (let tag of data) {
      for (let i = 0; i < tag.tags.length; i++) {
        if (!tagCount[tag.tags[i]]) {
          tagCount[tag.tags[i]] = 0
        }
        tagCount[tag.tags[i]] += 1
      }
    }
    this.chartLabels = Object.keys(tagCount)
    for (let tagNumber of Object.keys(tagCount)) {
      dataset.push(tagCount[tagNumber])
    }
    this.chartData.push({
      data: dataset
    })
  }
}
