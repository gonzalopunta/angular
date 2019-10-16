import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeliculasResponse, PeliculasResponseLast } from '../models/response-peliculas';

const apiKey="api_key=2f58f493b1da109ec36e32dde701c028";
const authURLpop = 'https://api.themoviedb.org/3/movie/popular?' + apiKey;
const authURLtop = 'https://api.themoviedb.org/3/movie/top_rated?' + apiKey;
const authURLlast = 'https://api.themoviedb.org/3/movie/now_playing?' + apiKey;

/*/api/films?api_Key=${apiKey}*/ 

const requestOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ServicioPeliculasService {

  constructor(private http: HttpClient) { }

  getFilmsPop(): Observable<PeliculasResponse> {
    return this.http.get<PeliculasResponse>(
      authURLpop,
       requestOptions
    );
 }

 getFilmsTop(): Observable<PeliculasResponse> {
  return this.http.get<PeliculasResponse>(
     authURLtop,
     requestOptions
  );
  }

  getFilmsLast(): Observable<PeliculasResponseLast> {
    return this.http.get<PeliculasResponseLast>(
      authURLlast,
      requestOptions
    );
  }

  getDetailsFilmPop(idPelicula: string): Observable<PeliculasResponse> {
    return this.http.get<PeliculasResponse>(
       authURLpop + idPelicula
    );
  }
}