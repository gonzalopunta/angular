import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PeliculasResponse } from '../Interfaces/peliculas-response.interface';

const requestOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

const URL="https://swapi.co/api/films/";

@Injectable({
  providedIn: 'root'
})

export class PeliculasService {

  constructor(private http: HttpClient) { }

  getPlanets(): Observable<PeliculasResponse> {
    return this.http.get<PeliculasResponse>(
       URL,
       requestOptions
    );
 }

}
