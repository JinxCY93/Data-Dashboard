import { Component, OnInit } from '@angular/core';
import data from '../../data'

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  chartType = "pie"
  chartData = []
  chartLabels = []

  constructor() { }

  ngOnInit() {

    let dataset = []
    let tagLikesLabel = []
    for (let tagLikes of data) {
      for (let i = 0; i < tagLikes.tags.length; i++) {
        if (!tagLikesLabel[tagLikes.tags[i]]) {
          tagLikesLabel[tagLikes.tags[i]] = 0
        }
        tagLikesLabel[tagLikes.tags[i]] += tagLikes.likes
      }
    }
    this.chartLabels = Object.keys(tagLikesLabel)
    console.log(tagLikesLabel)
    for (let tag of Object.keys(tagLikesLabel)) {
      dataset.push(tagLikesLabel[tag])
    }
    this.chartData.push({ data: dataset })
  }
}
