import { Component } from '@angular/core';

@Component({
  selector: 'app-gestao-estrategia',
  templateUrl: './gestao-estrategia.component.html',
  styleUrls: ['./gestao-estrategia.component.css']
})
export class GestaoEstrategiaComponent {

  basicDataBar: any;
  basicDataLine: any;
  basicDataDoughnutChart: any;
  basicDataBarHorizontal: any;

  horizontalOptions: any;

  ngOnInit() {
    this.basicDataBar = {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
      datasets: [
        {
          label: 'Realizadas',
          backgroundColor: '#42A5F5',
          data: [365, 259, 180, 281, 256]
        },
        {
          label: 'Não realizadas',
          backgroundColor: '#FFA726',
          data: [12, 8, 15, 9, 3]
        }
      ]
    };

    this.basicDataLine = {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
      datasets: [
        {
          label: 'Aumento de clientes',
          data: [280, 320, 260, 140, 210],
          fill: false,
          backgroundColor: '#20DB8C',
          borderColor: '#20DB8C',
          tension: .4
        },
        {
          label: 'Perdas de clientes',
          data: [20, 14, 10, 50, 25],
          backgroundColor: '#e32636',
          borderColor: '#e32636',
          tension: .4
        }
      ]
    };

    this.basicDataDoughnutChart = {
      labels: ['Adimplentes','Inadimplentes'],
      datasets: [
        {
          data: [400, 50],
          backgroundColor: [
            "#FF6384",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#FFCE56"
          ]
        }
      ]
    };

    this.basicDataBarHorizontal = {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
      datasets: [
        {
          label: 'Receitas',
          backgroundColor: '#1EE07D',
          data: [8, 10, 7, 5, 9]
        },
        {
          label: 'Despesas',
          backgroundColor: '#FD1556',
          data: [1, 2, 1, 3, 2]
        }
      ]
    };

    this.horizontalOptions = {
      indexAxis: 'y',
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        },
        y: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        }
      }
    };
  }

}
