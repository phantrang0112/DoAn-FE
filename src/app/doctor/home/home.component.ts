import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../doctor.component.css']
})
export class HomeComponent implements OnInit {
  public datasets: any;
  public data: any;
  public salesChart;
  public clicked = true;
  public clicked1 = false;

  constructor(private route: Router) {
  }
  ngOnInit() {

    this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40]
    ];
    this.data = this.datasets[0];


    const chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());
    const ordersChart = new Chart(chartOrders, {
      type: 'bar',

    });

    const chartSales = document.getElementById('chart-sales');

    this.salesChart = new Chart(chartSales, {
      type: 'line',

    });
  }


  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }
}

// tslint:disable-next-line:no-shadowed-variable
function parseOptions(Chart: any, arg1: any) {
  throw new Error('Function not implemented.');
}

// tslint:disable-next-line:no-shadowed-variable
function Chart(Chart: any, arg1: any) {
  throw new Error('Function not implemented.');
}

function chartOptions(): any {
  throw new Error('Function not implemented.');
}

