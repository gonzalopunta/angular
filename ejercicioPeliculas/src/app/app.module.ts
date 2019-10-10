import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PeliculasListadoComponent } from './peliculas-listado/peliculas-listado.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculasListadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
