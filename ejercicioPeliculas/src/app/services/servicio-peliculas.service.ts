import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioPeliculasService {
  
  private apiKey='2f58f493b1da109ec36e32dde701c028';
  private apiUrl: string = 'https://api.themoviedb.org/3/movie/top_rated?' + this.apiKey;

  constructor(private http: HttpClient) {
  }

  httpGetRequest() {
    return this.http.get<any>(this.apiUrl);
  }
}
