import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PeliculasListadoComponent } from './components/peliculas-listado/peliculas-listado.component';
import { FormsModule }   from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PeliculasListadoComponent,
    DetallePeliculaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300
    }),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
