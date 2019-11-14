import { Casting } from './Casting';
import { Personal } from './Personal';

export interface PeliculasPersona {
    cast: Casting[];
    crew: Personal[];
    id: number;
}