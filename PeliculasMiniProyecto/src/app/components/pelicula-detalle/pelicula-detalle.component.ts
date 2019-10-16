import { Component, OnInit, Input } from '@angular/core';
import { pelicula } from '../../models/peliculas';

@Component({
  selector: 'app-pelicula-detalle',
  templateUrl: './pelicula-detalle.component.html',
  styleUrls: ['./pelicula-detalle.component.css']
})
export class PeliculaDetalleComponent implements OnInit {
  @Input() Pelicula : pelicula;

  constructor() { }

  ngOnInit() {
  }

}
