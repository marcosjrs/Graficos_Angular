import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GraficoLinealComponent } from './components/grafico-lineal/grafico-lineal.component';
import { RouterModule } from '@angular/router';
import {appRouting} from './app.routes';
import { GraficoBarraComponent } from './components/grafico-barra/grafico-barra.component';
import { GraficoDonutsComponent } from './components/grafico-donuts/grafico-donuts.component';
import { GraficoTartaComponent } from './components/grafico-tarta/grafico-tarta.component';
import { GraficoRadarComponent } from './components/grafico-radar/grafico-radar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GraficoLinealComponent,
    GraficoBarraComponent,
    GraficoDonutsComponent,
    GraficoTartaComponent,
    GraficoRadarComponent
  ],
  imports: [
    BrowserModule,
    appRouting,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
