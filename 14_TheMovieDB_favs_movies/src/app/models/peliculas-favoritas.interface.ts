import { Pelicula } from './pelicula';

export interface Favoritas {
    page: number;
    results: Pelicula[];
    total_pages: number;
    total_results: number;
}