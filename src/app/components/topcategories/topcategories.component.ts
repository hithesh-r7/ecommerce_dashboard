import { Component, OnInit } from '@angular/core';
import {Chart,registerables} from 'chart.js/auto'

@Component({
  selector: 'app-topcategories',
  templateUrl: './topcategories.component.html',
  styleUrl: './topcategories.component.css'
})
export class TopcategoriesComponent implements OnInit {

  ngOnInit() {
    this.createPieChart();
  }

  createPieChart() {
    
    new Chart('pieChart', {
      type: 'doughnut',
      data: {
        labels: ['Fashion', 'Electronics', 'Food'],
        datasets: [
          {
            data: [30, 50, 20],
            backgroundColor: ['#90EE90', '#008000', '#FFCE56'],
            hoverBackgroundColor: ['#90EE90', '#008000', '#FFCE56']
          }
        ],
        
        
      },
      options: {
        
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: function(tooltipItem: any) {
                return tooltipItem.label + ': ' + tooltipItem.raw + '%';
              }
            }
          }
        }
      }
    })
}
}
