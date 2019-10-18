import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeliculaResponse } from '../models/pelicula-response.interface';
import { PeliculaLatest } from '../models/peliculalatest';
import { Pelicula } from '../models/pelicula';
import { Favoritas } from '../models/peliculas-favoritas.interface';

const peliculasURL = 'https://api.themoviedb.org/3/movie';
const apiKey = '2f58f493b1da109ec36e32dde701c028';
const sessionId = localStorage.getItem('sessionId');

const requestOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class PeliculasService {

  constructor(private http: HttpClient) {
  }

  public getPelicula(idPelicula: string): Observable<Pelicula> {
    return this.http.get<Pelicula>(
      peliculasURL + '/popular?api_key=' + apiKey
    );
  }

  public getPeliculas(): Observable<PeliculaResponse> {
    return this.http.get<PeliculaResponse>(
      peliculasURL + '/popular?api_key=' + apiKey
    );
  }
  public getPeliculasTopRated(): Observable<PeliculaResponse> {
    return this.http.get<PeliculaResponse>(
      peliculasURL + '/top_rated?api_key=' + apiKey
    );
  }
  public getPeliculasLatest(): Observable<PeliculaLatest> {
    return this.http.get<PeliculaLatest>(
      peliculasURL + '/latest?api_key=' + apiKey
    );
  }

  public getPeliculasFavorites(): Observable<Favoritas> {
    return this.http.get<Favoritas>(
      'https://api.themoviedb.org/3/account/{account_id}/favorite/movies?api_key=' + apiKey +
       "&session_id=" + sessionId
    );
  }
  
}