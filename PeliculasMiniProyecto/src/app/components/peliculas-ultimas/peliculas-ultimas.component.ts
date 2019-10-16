import { Component, OnInit } from '@angular/core';
import { pelicula } from '../../models/peliculas';
import { ServicioPeliculasService } from '../../servicios/servicio-peliculas.service';

@Component({
  selector: 'app-peliculas-ultimas',
  templateUrl: './peliculas-ultimas.component.html',
  styleUrls: ['./peliculas-ultimas.component.css']
})
export class PeliculasUltimasComponent implements OnInit {
  peliculaSeleccionada: pelicula;
  vote_average: number;
  listadoFilms:pelicula[];
  constructor( private servicioPelicula: ServicioPeliculasService) { }

  ngOnInit() {
    this.loadFilmsLast();
  }
  loadFilmsLast() {
    this.servicioPelicula.getFilmsLast().subscribe(resp => {
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
 