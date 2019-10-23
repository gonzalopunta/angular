import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/service/peliculas.service';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-peliculas-favoritas',
  templateUrl: './peliculas-favoritas.component.html',
  styleUrls: ['./peliculas-favoritas.component.css']
})
export class PeliculasFavoritasComponent implements OnInit {

  peliculas: Pelicula[];
  enlace: string = 'https://image.tmdb.org/t/p/w500';

  constructor(private peliculasFavoritasServicio: PeliculasService) { }
  

  ngOnInit() {
    this.loadPeliculasFavoritas();
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

  loadPeliculasFavoritas(){
    this.peliculasFavoritasServicio.getPeliculasFavorites().subscribe(resp => {
      this.peliculas = resp.results;
      console.log(this.peliculas);
    });
  }
}
