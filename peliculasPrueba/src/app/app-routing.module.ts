import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonasListadoComponent } from './components/personas-listado/personas-listado.component';
import { PersonaDetalleComponent } from './components/persona-detalle/persona-detalle.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'personas', component: PersonasListadoComponent },
  { path: 'detalles/:id', component: PersonaDetalleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
