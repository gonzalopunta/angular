import { Injectable } from '@angular/core';
import { Articulo } from '../models/Articulo';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private articulo: Array<Articulo> = [];
  constructor() {
    for (let i = 0; i < 7; i++) {
      const articulo = new Articulo();
      articulo.nombre = `Producto ${i}`;
      articulo.descripcion = `producto de ejemplo ${i}`;
      articulo.precioOriginal = i * 10 + 100;
      articulo.precioRebajado = i * 10 + 100 - ((articulo.precioOriginal*20) / 100);
      this.articulo.push(articulo);
    }
  }

  getArticulos() {
    return new Promise((resolve, reject) => {
      if (this.articulo.length > 0) {
        resolve(this.articulo);
      } else {
        reject('No hay articulos disponibles');
      }
    });
  }

  deleteArticulo(id:number){
    
  }
}
