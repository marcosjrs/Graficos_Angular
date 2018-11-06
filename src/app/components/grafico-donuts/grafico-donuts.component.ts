import { Component } from '@angular/core';

@Component({
  selector: 'app-grafico-donuts',
  templateUrl: './grafico-donuts.component.html'
})
export class GraficoDonutsComponent{

  public lblMeses:string[] = ['Enero', 'Febrero', 'Marzo'];
  public datosGrafico:number[] = [350, 450, 100];
  public tipoDeGrafico:string = 'doughnut';
 
  public onClickGrafico(e:any):void {
    console.log(e);
  }

  public darValoresAleatorios():void {
    // Cambiando 3 valores
    let data = [
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100)];
    this.datosGrafico = data;
  }

 
}
