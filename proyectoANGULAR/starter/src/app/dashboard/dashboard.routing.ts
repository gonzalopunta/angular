import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { UsuarioListadoComponent } from './usuario-listado/usuario-listado.component';

export const DashboardRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path:'usuarios', component:UsuarioListadoComponent}
];
