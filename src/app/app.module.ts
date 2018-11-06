import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GraficoLinealComponent } from './components/grafico-lineal/grafico-lineal.component';
import { RouterModule } from '@angular/router';
import {appRouting} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GraficoLinealComponent
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
