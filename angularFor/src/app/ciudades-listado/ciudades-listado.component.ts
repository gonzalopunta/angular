import { Component, OnInit } from '@angular/core';
import { ciudad } from '../models/ciudad';
import { CIUDADES } from '../models/mock-ciudades';

@Component({
  selector: 'app-ciudades-listado',
  templateUrl: './ciudades-listado.component.html',
  styleUrls: ['./ciudades-listado.component.css']
})
export class CiudadesListadoComponent implements OnInit {

  ciudades: ciudad[] = CIUDADES;
  ciudadSeleccionada: ciudad;

  constructor() { }

  ngOnInit() {
  }

  selectCiudad(ciudad: ciudad){
    this.ciudadSeleccionada = ciudad;
  }

}
