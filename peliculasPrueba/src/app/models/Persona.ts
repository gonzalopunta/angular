import { Pelicula } from './Pelicula';

export interface Persona {
    popularity: number;
    known_for_department: string;
    gender: number;
    id: number;
    profile_path: string;
    adult: boolean;
    known_for: Pelicula[];
    name: string;
}