//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgCircleProgressModule } from 'ng-circle-progress';


//Componentes
import { AppComponent } from './app.component';
import { ListadoPeliculasComponent } from './components/listado-peliculas/listado-peliculas.component';
import { PeliculaDetalleComponent } from './components/pelicula-detalle/pelicula-detalle.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { ListadoPeliculasLatestComponent } from './components/listado-peliculas-latest/listado-peliculas-latest.component';
import { ListadoPeliculasTopComponent } from './components/listado-peliculas-top/listado-peliculas-top.component';
import { PeliculasFavoritasComponent } from './components/peliculas-favoritas/peliculas-favoritas.component';


//Servicios
import { PeliculasService } from './service/peliculas.service';
import { AuthService } from './service/auth.service';
import { CreateListComponent } from './components/create-list/create-list.component';


//RUTAS DE LA APP
const routes: Routes = [ 
  { path: 'populares', component: ListadoPeliculasComponent }, 
  { path: 'latest', component: ListadoPeliculasLatestComponent }, 
  { path: 'toprated', component: ListadoPeliculasTopComponent },
  { path: 'movie/:idP', component: PeliculaDetalleComponent },
  { path: 'favoritas', component: PeliculasFavoritasComponent },
  { path: 'createList', component: PeliculasFavoritasComponent },
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
    ListadoPeliculasTopComponent,
    PeliculasFavoritasComponent,
    CreateListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatIconModule,
    CreateListComponent,
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
