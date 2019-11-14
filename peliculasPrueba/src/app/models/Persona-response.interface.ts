import { Persona } from './Persona';

export interface ListaPersona {
    page: number;
    total_results: number;
    total_pages: number;
    results: Persona[];
}