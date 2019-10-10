import { Component, OnInit } from '@angular/core';
import { peliculas } from '../models/peliculas';
import { PELICULAS } from '../models/mock-peliculas';

@Component({
  selector: 'app-peliculas-listado',
  templateUrl: './peliculas-listado.component.html',
  styleUrls: ['./peliculas-listado.component.css']
})
export class PeliculasListadoComponent implements OnInit {

  peliculas: peliculas[] = PELICULAS;
  peliculaSeleccionada: peliculas;
  puntuacion: number;
  constructor() { }

  ngOnInit() {

  }

  selectPelicula(pelicula: peliculas){
    this.peliculaSeleccionada = pelicula
  }

  getColor(){

    if (this.peliculaSeleccionada.vote_average*10 < 50)
     return 'red';
    
    else if (this.peliculaSeleccionada.vote_average>=50 && this.peliculaSeleccionada.vote_average<=70) 
      return 'orange';
      else
        return 'green';
  }

}
