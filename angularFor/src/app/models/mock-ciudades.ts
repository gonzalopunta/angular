import { Pais } from "./pais";
import { ciudad } from './ciudad';

const SPAIN: Pais= { nombre: 'España', iso_code: 'es'};
const ITALY: Pais= { nombre: 'Italia', iso_code: 'it'};
const FRANCE: Pais= { nombre: 'Francia', iso_code: 'fr'};

export const CIUDADES: ciudad[] = [
    {nombre:'Sevilla', rating: 100, pais: SPAIN, foto_url:''},
    {nombre:'Roma', rating: 100, pais: ITALY, foto_url:''},
    {nombre:'Paris', rating: 100, pais: FRANCE, foto_url:''},
    {nombre:'Madrid', rating: 100, pais: SPAIN, foto_url:''},
    {nombre:'Granada', rating: 100, pais: SPAIN, foto_url:''},
    {nombre:'Cordoba', rating: 100, pais: SPAIN, foto_url:''}
]