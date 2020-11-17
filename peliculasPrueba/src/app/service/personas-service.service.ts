import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListaPersona } from '../models/Persona-response.interface';
import { PersonaDetalle } from '../models/Persona-detalle-response.interface';
import { PeliculasPersona } from '../models/Peliculas-persona-response.interface';


const URL= 'https://api.themoviedb.org/3/person';
const apiKey = '2f58f493b1da109ec36e32dde701c028';

@Injectable({
  providedIn: 'root'
})

export class PersonasServiceService {

  constructor(private http: HttpClient) { 
  }

  public getPersona(): Observable<ListaPersona> {
    return this.http.get<ListaPersona>(
      URL + '/popular?api_key=' + apiKey
    );
  }

  public getDetallePersona(idPersona: string): Observable <PersonaDetalle>{
    return this.http.get<PersonaDetalle>(
      URL + '/' + idPersona + '?api_key=' + apiKey
    );
  }

  public getDetallePeliculaActor(idPersona: string): Observable <PeliculasPersona>{
    return this.http.get<PeliculasPersona>(
      URL + '/' + idPersona + 'movie_credits?api_key=' + apiKey
    );
  }
}
