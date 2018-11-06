import { RouterModule, Routes } from '@angular/router';
import { GraficoLinealComponent } from './components/grafico-lineal/grafico-lineal.component';

const routes: Routes = [
    { path: 'lineales', component: GraficoLinealComponent },
    { path: '**', pathMatch:'full', redirectTo: 'lineales' }
];

export const appRouting = RouterModule.forRoot(routes);