import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonasServiceService } from 'src/app/service/personas-service.service';
import { PersonaDetalle } from 'src/app/models/Persona-detalle-response.interface';
import { PeliculasPersona } from 'src/app/models/Peliculas-persona-response.interface';

@Component({
  selector: 'app-persona-detalle',
  templateUrl: './persona-detalle.component.html',
  styleUrls: ['./persona-detalle.component.css']
})
export class PersonaDetalleComponent implements OnInit {

  idPersona: string;
  persona: PersonaDetalle;
  enlace: string = 'https://image.tmdb.org/t/p/w500';
  detallesPeliculaActor: PeliculasPersona;

  constructor(private route: ActivatedRoute,
    private personasService: PersonasServiceService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.idPersona = params.get("id");

      this.personasService.getDetallePersona(this.idPersona).subscribe(resp => {
        this.persona = resp;       
      });
    
    }); 
    //this.peliculasActor(this.idPersona);
  }

  /*
  peliculasActor(idPersona: string){
      this.idPersona = idPersona;

      this.personasService.getDetallePeliculaActor(this.idPersona).subscribe(resp => {
        this.detallesPeliculaActor = resp;
        console.log(this.detallesPeliculaActor);
      });
  }
*/
}
