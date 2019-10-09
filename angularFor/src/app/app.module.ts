import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CiudadesListadoComponent } from './ciudades-listado/ciudades-listado.component';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CiudadDetalleComponent } from './ciudad-detalle/ciudad-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    CiudadesListadoComponent,
    CiudadDetalleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
