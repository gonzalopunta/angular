import { Component, OnInit } from '@angular/core';
import { pelicula } from '../../models/peliculas';
import { ServicioPeliculasService } from '../../servicios/servicio-peliculas.service';

@Component({
  selector: 'app-peliculas-listado',
  templateUrl: './peliculas-listado.component.html',
  styleUrls: ['./peliculas-listado.component.css']
})
export class PeliculasListadoComponent implements OnInit {
  peliculaSeleccionada: pelicula;
  vote_average: number;
  listadoFilms :pelicula[];
  columnsToDisplay = ['title','popularity','director','original_title','vote_average','overview'];

  constructor( private servicioPelicula: ServicioPeliculasService) { }

  ngOnInit() {
    this.loadFilmsPop();
  }

  loadFilmsPop() {
    this.servicioPelicula.getFilmsPop().subscribe(resp => {
      this.listadoFilms = resp.results;
    });
  }

    selectPelicula (Pelicula: pelicula){
    this.peliculaSeleccionada=Pelicula 
}
  getColor(vote_average){
    if(vote_average<50){
      return "red";
    }else if(vote_average>=50 && vote_average<=70){
      return "orange";
    }else{
      return "green";
    }
  }
}
