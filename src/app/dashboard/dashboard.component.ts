import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  public chart: any;
  public  userByHomme: any;
  public users: any;
 ctx :any;
 config: any;
 chartData :number[]=[];
 chartDataContrat:any[]=[];
 chartDataLabels :any[]= [];
 chartDataContrattype :any[]=[];
 chartDataCountUserByYear :any[]=[];
 chartDataUserByYear :any[]=[];
 chartDataUserByDepart : any[]=[];
 chartDataCountUserByDepart : any[]=[];
 chartDataUserByAge : any[]=[];
 chartDataCountUserByAge : any[]=[];
 userData: any[];
 pyramidChart: Chart;
 countuserHomme :any;
  constructor(private userService: UserService) { }

   ngOnInit() {
 
    this.userService.getUserWithGenre().subscribe(data => {
      data.forEach(element => {
        this.chartData.push(element[1]);
      });
      this.getPieChart("myChart", this.chartData, ['homme','femme']);

    });

    this.userService.getUserWithContrat().subscribe(data => {

      data.forEach(element => {
        this.chartDataContrat.push(element[1]);
        this.chartDataContrattype.push(element[0]);
      });
      console.log(this.chartDataContrat, this.chartDataContrattype)
      this.getDoughnutChart("myCharttypeContrat", this.chartDataContrat, this.chartDataContrattype);
    });



  this.userService.getUserWithDepartement().subscribe(data => {
    data.forEach(element => {
      this.chartDataCountUserByDepart.push(element[1]);
      this.chartDataUserByDepart.push(element[0]);
    });
   this.getBarChart("myBarChartDepartment", this.chartDataCountUserByDepart, this.chartDataUserByDepart);
});
 
this.userService.getUserWithAge().subscribe(data => {
  data.forEach(element => {
    this.chartDataCountUserByAge.push(element[1]);
    this.chartDataUserByAge.push(element[0]);
  });

  this.getPyramidChart("myBarChartAge", this.chartDataCountUserByAge, this.chartDataUserByAge);
});  
}
getDoughnutChart(iddoughnutchart, data, datalabel) {
  this.ctx = document.getElementById(iddoughnutchart);
  this.config = {
    type: 'doughnut',
    data: {
      labels: datalabel,
      datasets: [{
        data: data
      }]
    }
  }
  const mychart1 = new Chart(this.ctx, this.config);
}
getPieChart(idpiechart, data, datalabel) {
  this.ctx = document.getElementById(idpiechart);
  this.config = {
    type: 'pie',
    data: {
      labels: datalabel,
      datasets: [{
        data: data
      }]
    }
  }
  const mychart1 = new Chart(this.ctx, this.config);
}
getBarChart(idbarchart, data, datalabel) {
  this.ctx = document.getElementById(idbarchart);
  const myChart = new Chart(this.ctx, {
    type: 'bar',
    data: {
      labels: datalabel,
      datasets: [{
        label: '',
        data: data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

}

 
getPyramidChart(idpyramidchart, data, datalabel) {
  this.ctx = document.getElementById(idpyramidchart);
  this.config = {
    type: 'bar',
    data: {
      labels: datalabel,
      datasets: [{
        label: 'Age',
        data: data,
        backgroundColor: '#00c0ef'
        
      }]
    }
  }
  const mychart1 = new Chart(this.ctx, this.config);
}


}

