import { Component, OnInit } from '@angular/core';
import data from '../../data'

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  chartType = "line"
  chartData = []
  chartLabels = []
  constructor() { }

  ngOnInit() {
    let dataset = []
    let tagCount = {}
    for (let tagLikes of data) {
      var month = new Date(tagLikes.dateAdded)
      console.log(month.getMonth())
      let num = month.getMonth() + 1
      if (!tagCount[num]) {
        tagCount[num] = 0
      }
      tagCount[num] += 1
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
