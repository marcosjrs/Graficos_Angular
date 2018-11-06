import { Component } from '@angular/core';

@Component({
  selector: 'app-grafico-radar',
  templateUrl: './grafico-radar.component.html'
})
export class GraficoRadarComponent  {


  public lblActividades:string[] =['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
  public datosGrafico:any[] = [
    {data: [65, 59, 90, 81, 56, 55, 40], label: 'Fulanito'},
    {data: [28, 48, 40, 19, 96, 27, 100], label: 'Menganito'}
  ];
  public tipoDeGrafico:string = 'radar';
  public mostrarLeyendasDeGrafico:boolean = true;

  ngAfterViewInit(){
    this.darValoresAleatorios();
  }
 
  public onClickGrafico(e:any):void {
    console.log(e);
  }
   
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

}
