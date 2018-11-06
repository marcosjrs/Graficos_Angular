import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GraficoLinealComponent } from './components/grafico-lineal/grafico-lineal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GraficoLinealComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
