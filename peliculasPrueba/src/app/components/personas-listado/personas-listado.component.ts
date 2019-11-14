import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/Persona';
import { PersonasServiceService } from 'src/app/service/personas-service.service';

@Component({
  selector: 'app-personas-listado',
  templateUrl: './personas-listado.component.html',
  styleUrls: ['./personas-listado.component.css']
})
export class PersonasListadoComponent implements OnInit {

  persona: Persona[];
  enlace: string = 'https://image.tmdb.org/t/p/w500';

  constructor(private personaService: PersonasServiceService) { }

  ngOnInit() {
    this.loadPersona();
  }

  loadPersona(){
    this.personaService.getPersona().subscribe(resp => {
      this.persona = resp.results;
    });
  }
}
