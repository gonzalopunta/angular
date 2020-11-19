import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { FormsModule } from '@angular/forms';
import { ListaArticulosComponent } from './components/lista-articulos/lista-articulos.component';
import { BannersComponent } from './components/banners/banners.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponent,
    ListaArticulosComponent,
    BannersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
