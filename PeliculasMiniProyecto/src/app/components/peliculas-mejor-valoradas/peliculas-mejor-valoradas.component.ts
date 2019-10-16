import { Component, OnInit } from '@angular/core';
import { pelicula } from '../../models/peliculas';
import { ServicioPeliculasService } from '../../servicios/servicio-peliculas.service';


@Component({
  selector: 'app-peliculas-mejor-valoradas',
  templateUrl: './peliculas-mejor-valoradas.component.html',
  styleUrls: ['./peliculas-mejor-valoradas.component.css']
})

export class PeliculasMejorValoradasComponent implements OnInit {
  peliculaSeleccionada: pelicula;
  vote_average: number;
  listadoFilms:pelicula[];

  constructor(private servicioPelicula: ServicioPeliculasService) { }

  ngOnInit() {
    this.loadFilmsTop();
  }

  loadFilmsTop() {
    this.servicioPelicula.getFilmsTop().subscribe(resp => {
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
