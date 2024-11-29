import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PreguntaComponent } from './components/pregunta/pregunta.component';
import { RespuestaComponent } from './components/respuesta/respuesta.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'pregunta', component: PreguntaComponent },
    { path: 'respuesta', component: RespuestaComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', component: DashboardComponent },
];
