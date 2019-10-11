import {Peliculas} from './peliculas.interface';

export interface PeliculasResponse {
    count: number;
    next?: any;
    previous?: any;
    results: Peliculas[];
}