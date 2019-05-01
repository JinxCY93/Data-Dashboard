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
      var abc = month.getMonth()
      for (let i = 0; i < tagLikes.tags.length; i++) {
        if (!monthlyTagLikes[abc]) {
          monthlyTagLikes[abc] = {}
        }
        if (!monthlyTagLikes[abc][tagLikes.tags[i]]) {
          monthlyTagLikes[abc][tagLikes.tags[i]] = 0
        }
        monthlyTagLikes[abc][tagLikes.tags[i]] += tagLikes.likes
      }
    }
    let aggregateTagLikes = {}
    this.chartLabels = Object.keys(monthlyTagLikes)
    for (let month of Object.keys(monthlyTagLikes)) {
      for (let tag in monthlyTagLikes[month]) {
        if (!aggregateTagLikes[tag]) {
          aggregateTagLikes[tag] = []
        }
        aggregateTagLikes[tag].push(monthlyTagLikes[month][tag])
      }
    }
    let dataset = []

    for (let tag in aggregateTagLikes) {
      dataset.push({
        data: aggregateTagLikes[tag],
        label: tag
      })
    }

    this.chartData = dataset
  }
}
