import { Pais } from './pais';

export interface ciudad{
    nombre: string;
    rating: number;
    pais: Pais;
    foto_url: string;
}