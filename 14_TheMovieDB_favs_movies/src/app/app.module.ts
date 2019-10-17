import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { ListadoPeliculasComponent } from './components/listado-peliculas/listado-peliculas.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { PeliculaDetalleComponent } from './components/pelicula-detalle/pelicula-detalle.component';
import { PeliculasService } from './service/peliculas.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { HttpClientModule } from '@angular/common/http';
import { ListadoPeliculasLatestComponent } from './components/listado-peliculas-latest/listado-peliculas-latest.component';

import { ListadoPeliculasTopComponent } from './components/listado-peliculas-top/listado-peliculas-top.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './service/auth.service';

//RUTAS DE LA APP
const routes: Routes = [ 
  { path: 'populares', component: ListadoPeliculasComponent }, 
  { path: 'latest', component: ListadoPeliculasLatestComponent }, 
  { path: 'toprated', component: ListadoPeliculasTopComponent },
  { path: 'movie/:id', component: PeliculaDetalleComponent },
  { path: '', redirectTo: '/populares', pathMatch: 'full' }, 
  { path: '**', component: PaginaNoEncontradaComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListadoPeliculasComponent,
    PeliculaDetalleComponent,
    PaginaNoEncontradaComponent,
    ListadoPeliculasLatestComponent,
    ListadoPeliculasTopComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatIconModule,
    RouterModule.forRoot(
      routes
    ),
    NgCircleProgressModule.forRoot({
      "backgroundColor": "#FDB900",
      "radius": 20,
      "maxPercent": 100,
      "unitsFontSize": "12",
      "unitsFontWeight": "700",
      "unitsColor": "#483500",
      "outerStrokeWidth": 5,
      "outerStrokeColor": "#FFFFFF",
      "innerStrokeColor": "#FFFFFF",
      "titleColor": "#483500",
      "titleFontSize": "15",
      "titleFontWeight": "600",
      "subtitleColor": "#483500",
      "animateTitle": false,
      "showSubtitle": false,
      "showInnerStroke": false,
      "startFromZero": false
    }),
    BrowserAnimationsModule
  ],
  providers: [
    PeliculasService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
