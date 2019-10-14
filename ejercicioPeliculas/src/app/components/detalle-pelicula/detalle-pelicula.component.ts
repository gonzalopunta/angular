import { Component, OnInit } from '@angular/core';
import { ServicioPeliculasService } from 'src/app/services/servicio-peliculas.service';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  public datos: any = null;
  public listaPeliculas: Object[] = null;

  constructor(private pelisService: ServicioPeliculasService) { 
    pelisService.httpGetRequest().subscribe(datos => {
      this.datos = datos;
      this.listaPeliculas = this.datos.results;
    });
  }

  ngOnInit() {
  }

}
