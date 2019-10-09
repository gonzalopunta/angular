import { Component, OnInit } from '@angular/core';

export interface infoPisos {
  titulo: string;
  precio: number;
  tipo: string;
  local: string;
  metros: number;
  nBanos: number;
  nHabitaciones: number;
  terraza: string;
  garaje: string;
  foto: string;
  descripcion: string;

}

const PISOS: infoPisos[] = [
  {titulo: 'Casa', precio: 1500, tipo: 'alquiler', local: 'Sevilla', metros: 90, nBanos: 2, 
  nHabitaciones: 4, terraza: 'S', garaje: 'N', foto: 'S', descripcion: "Es una casa muy bonita"},
  {titulo: 'Casa', precio: 1500, tipo: 'alquiler', local: 'Sevilla', metros: 90, nBanos: 2, 
  nHabitaciones: 4, terraza: 'N', garaje: 'S', foto: 'N', descripcion: "Es una casa muy grande"},
  {titulo: 'Casa', precio: 1500, tipo: 'alquiler', local: 'Sevilla', metros: 90, nBanos: 2, 
  nHabitaciones: 4, terraza: 'S', garaje: 'N', foto: 'S', descripcion: "Es una casa muy bonita"},
  {titulo: 'Casa', precio: 1500, tipo: 'alquiler', local: 'Sevilla', metros: 90, nBanos: 2, 
  nHabitaciones: 4, terraza: 'N', garaje: 'S', foto: 'N', descripcion: "Es una casa muy grande"},
  {titulo: 'Casa', precio: 1500, tipo: 'alquiler', local: 'Sevilla', metros: 90, nBanos: 2, 
  nHabitaciones: 4, terraza: 'S', garaje: 'N', foto: 'S', descripcion: "Es una casa muy bonita"}
];

@Component({
  selector: 'app-imnoviliaria',
  templateUrl: './imnoviliaria.component.html',
  styleUrls: ['./imnoviliaria.component.css']
})
export class ImnoviliariaComponent implements OnInit {
  displayedColumns: string[] = ['titulo', 'precio', 'tipo', 'local'];
  dataSource = PISOS;
  constructor() { }

  ngOnInit() {
  }

}
