import { RouterModule, Routes } from '@angular/router';
import { GraficoLinealComponent } from './components/grafico-lineal/grafico-lineal.component';
import { GraficoBarraComponent } from './components/grafico-barra/grafico-barra.component';
import { GraficoDonutsComponent } from './components/grafico-donuts/grafico-donuts.component';

const routes: Routes = [
    { path: 'lineales', component: GraficoLinealComponent },
    { path: 'barras', component: GraficoBarraComponent },
    { path: 'donuts', component: GraficoDonutsComponent },
    { path: '**', pathMatch:'full', redirectTo: 'lineales' }
];

export const appRouting = RouterModule.forRoot(routes);