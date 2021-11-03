import { Component } from '@angular/core';

@Component({
  selector: 'app-gestao-estrategia',
  templateUrl: './gestao-estrategia.component.html',
  styleUrls: ['./gestao-estrategia.component.css']
})
export class GestaoEstrategiaComponent {

  basicData: any;

  basicOptions: any;

  ngOnInit() {
    this.basicData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: '#42A5F5',
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: 'My Second dataset',
                backgroundColor: '#FFA726',
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };
  }

}
