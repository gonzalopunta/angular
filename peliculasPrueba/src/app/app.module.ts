//Propios de angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

//App
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Componentes
import { PersonasListadoComponent } from './components/personas-listado/personas-listado.component';
import { PersonaDetalleComponent } from './components/persona-detalle/persona-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonasListadoComponent,
    PersonaDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
