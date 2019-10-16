import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PeliculasListadoComponent } from './components/peliculas-listado/peliculas-listado.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { PeliculaDetalleComponent } from './components/pelicula-detalle/pelicula-detalle.component';
import { FormsModule }   from '@angular/forms';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasMejorValoradasComponent } from './components/peliculas-mejor-valoradas/peliculas-mejor-valoradas.component';
import { PeliculasUltimasComponent } from './components/peliculas-ultimas/peliculas-ultimas.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { NgCircleProgressModule } from 'ng-circle-progress';


/*/api/films?api_Key=${apiKey}*/ 
const appRoutes: Routes = [
  {path: 'peliculas', component: PeliculasListadoComponent},
  {path: 'peliculas-top', component: PeliculasMejorValoradasComponent},
  {path: 'peliculas-last', component: PeliculasUltimasComponent},
  {path: 'detalles/:id', component: PeliculaDetalleComponent},
  {path: '', pathMatch: 'full', redirectTo: '/peliculas'},
  { path: '**', component: PaginaNoEncontradaComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    PeliculasListadoComponent,
    PeliculaDetalleComponent,
    PaginaNoEncontradaComponent,
    PeliculasMejorValoradasComponent,
    PeliculasUltimasComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
// Specify ng-circle-progress as an import
NgCircleProgressModule.forRoot({
  // set defaults here
  radius: 100,
  outerStrokeWidth: 16,
  innerStrokeWidth: 8,
  outerStrokeColor: "#78C000",
  innerStrokeColor: "#C7E596",
  animationDuration: 300
}),
  FormsModule,
  RouterModule.forRoot(
    appRoutes
  ),HttpClientModule,
  MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
