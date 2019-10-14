import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/models/interface/planet.interface';
import { PlanetsService } from 'src/app/Services/planets.service';

@Component({
  selector: 'app-planets-listado',
  templateUrl: './planets-listado.component.html',
  styleUrls: ['./planets-listado.component.css']
})
export class PlanetsListadoComponent implements OnInit {
  listadoPlanetas: Planet[];
  columnsToDisplay = ['name', 'rotation_period','orbital_period','diameter','climate','gravity','terrain','surface_water','population'];

  constructor(private planetService: PlanetsService) { }

  ngOnInit() {
    this.loadPlanets();
  }

  loadPlanets() {
    this.planetService.getPlanets().subscribe(resp => {
      this.listadoPlanetas = resp.results;
    });
  }

}