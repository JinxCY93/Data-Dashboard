import { Component, OnInit } from '@angular/core';
import data from '../../data'

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  chartType = "bar"
  chartData = []
  chartLabels = []
  constructor() { }

  ngOnInit() {
    //number of likes per tag per month.
    let monthlyTagLikes = {}
    for (let tagLikes of data) {
      var month = new Date(tagLikes.dateAdded)
      console.log(month.getMonth())
      for (let i = 0; i < tagLikes.tags.length; i++) {
        if (!monthlyTagLikes[month.getMonth()]) {
          monthlyTagLikes[month.getMonth()] = {}
        }
        if (!monthlyTagLikes[month.getMonth()][tagLikes.tags[i]]) {
          monthlyTagLikes[month.getMonth()][tagLikes.tags[i]] = 0
        }
        monthlyTagLikes[month.getMonth()][tagLikes.tags[i]] += tagLikes.likes
      }
    }
    let aggregateTagLikes = {}
    this.chartLabels = Object.keys(monthlyTagLikes)
    for (let month of Object.keys(monthlyTagLikes)) {
      for (let tag of monthlyTagLikes[month]) {
        if (!aggregateTagLikes[tag]) {
          aggregateTagLikes[tag] = []
        }
        aggregateTagLikes[tag].push(monthlyTagLikes[month][tag])
      }
    }
  }
}
