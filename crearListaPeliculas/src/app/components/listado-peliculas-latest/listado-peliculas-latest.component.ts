import { Component, OnInit } from '@angular/core';

import {PeliculasService} from "../../service/peliculas.service"
import { PeliculaLatest } from '../../models/peliculalatest';

@Component({
  selector: 'app-listado-peliculas-latest',
  templateUrl: './listado-peliculas-latest.component.html',
  styleUrls: ['./listado-peliculas-latest.component.css']
})
export class ListadoPeliculasLatestComponent implements OnInit {
  pelicula: PeliculaLatest; 
  enlace: string = 'https://image.tmdb.org/t/p/w500';

  constructor(private peliculaslatest : PeliculasService) { }

  ngOnInit() {
    this.loadPeliculasLatest();
  }
 
  ponerColorPorPuntuacion(valoracion: number){
    valoracion=valoracion*10
    if(valoracion<50){
      return 'red';
    }else if(valoracion>=50&&valoracion<70){
      return 'orange'
    }else{
      return 'green'
    }
  }

  calcularLongitudDescripcion(descripcion: String){
    return descripcion.length;
  }

  loadPeliculasLatest(){
    this.peliculaslatest.getPeliculasLatest().subscribe(resp => {   
      this.pelicula = resp;
        this.pelicula.poster_path=this.enlace+this.pelicula.poster_path;
    });
  }

}
