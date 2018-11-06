import { Component } from '@angular/core';

@Component({
  selector: 'app-grafico-barra',
  templateUrl: './grafico-barra.component.html'
})
export class GraficoBarraComponent  {

  public opcionesGrafico:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public lblMeses:string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
  public tipoDeGrafico:string = 'bar';
  public mostrarLeyendasDeGrafico:boolean = true;
 
  public datosGrafico:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
 
  public onClickGrafico(e:any):void {
    console.log(e);
  }
 
  public darValoresAleatorios():void {
    // Cambiando 3 valores
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
      //Para que angular reconozca el cambio, se clona y se le asigna de nuevo
    let clone = JSON.parse(JSON.stringify(this.datosGrafico));
    clone[0].data = data;
    this.datosGrafico = clone;
  }

}
