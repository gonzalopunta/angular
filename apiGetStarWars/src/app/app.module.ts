import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { PeliculasService } from './Services/peliculas.service';
import { ListadoPeliculasComponent } from './components/listado-peliculas/listado-peliculas.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { PlanetsListadoComponent } from './components/planets-listado/planets-listado.component';

const appRoutes: Routes = [
  {path: 'peliculas', component: ListadoPeliculasComponent},
  {path: 'planetas', component: PlanetsListadoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListadoPeliculasComponent,
    PlanetsListadoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    RouterModule.forRoot(
      appRoutes
    )

  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
