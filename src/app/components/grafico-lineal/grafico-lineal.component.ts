import { Component } from '@angular/core';

@Component({
  selector: 'app-grafico-lineal',
  templateUrl: './grafico-lineal.component.html'
})
export class GraficoLinealComponent {

  // lineChart
  public datosGrafico:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];
  public lblMeses:Array<any> = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
  public opcionesGrafico:any = {
    responsive: true
  };
  public coloresGrafico:Array<any> = [
    { // gris
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // gris oscuro
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // gris
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public mostrarLeyendasDeGrafico:boolean = false;
  public tipoDeGrafico:string = 'line';
 
  public darValoresAleatorios():void {
    let _datosGrafico:Array<any> = new Array(this.datosGrafico.length);
    for (let i = 0; i < this.datosGrafico.length; i++) {
      _datosGrafico[i] = {data: new Array(this.datosGrafico[i].data.length), label: this.datosGrafico[i].label};
      for (let j = 0; j < this.datosGrafico[i].data.length; j++) {
        _datosGrafico[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.datosGrafico = _datosGrafico;
  }
 
  public onClickGrafico(e:any):void {
    console.log(e);
  }


}
