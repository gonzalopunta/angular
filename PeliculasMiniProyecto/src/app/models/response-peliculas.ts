import { pelicula, Dates } from './peliculas';

export interface PeliculasResponse {
  page: number;
  total_results: number;
  total_pages: number;
  results: pelicula[];
}

export interface PeliculasResponseLast {
  results: pelicula[];
  page: number;
  total_results: number;
  dates: Dates;
  total_pages: number;
}