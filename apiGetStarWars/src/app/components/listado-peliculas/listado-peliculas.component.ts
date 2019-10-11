import { Component, OnInit } from '@angular/core';
import { Peliculas } from 'src/app/Interfaces/peliculas.interface';
import { PeliculasService } from 'src/app/Services/peliculas.service';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  listadoPeliculas: Peliculas[];
  columnsToDisplay = ['title', 'episode_id', 'director', 'producer'];

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit() {
    this.cargaPeliculas();
  }

  cargaPeliculas() {
    this.peliculasService.getPlanets().subscribe(resp => {
       this.listadoPeliculas = resp.results;
    });
 }

}
