import { Component, OnInit,Input } from '@angular/core';
import { peliculas } from '../models/peliculas';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  @Input() pelicula:peliculas;

  constructor() { }

  ngOnInit() {
  }

}
