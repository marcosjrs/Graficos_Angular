import { Component } from '@angular/core';

@Component({
  selector: 'app-grafico-tarta',
  templateUrl: './grafico-tarta.component.html'
})
export class GraficoTartaComponent {

  public lblMeses:string[] = ['Enero', 'Febrero', 'Marzo'];
  public datosGrafico:number[] = [350, 450, 100];
  public tipoDeGrafico:string = 'pie';
 
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
