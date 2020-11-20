import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/Articulo';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.scss']
})
export class ArticulosComponent implements OnInit {

  private listaArticulos: Array<Articulo>;

  private cantidad: number;

  private total: number=0;
  constructor() { }

  ngOnInit(): void {

    this.listaArticulos = [
      new Articulo(0, 'https://static.pullandbear.net/2/photos//2020/I/0/2/p/9751/505/800/9751505800_2_2_8.jpg?t=1604571949785&imwidth=563',
        'Abrigo oversize paño negro', 'Para el frio', 'negro', 42, false, 90, 50),

        new Articulo(1, 'https://static.pullandbear.net/2/photos//2020/I/0/2/p/9751/505/800/9751505800_2_2_8.jpg?t=1604571949785&imwidth=563',
        'Abrigo oversize paño negro', 'Para el frio', 'negro', 42, false, 90, 50),

        new Articulo(2, 'https://static.pullandbear.net/2/photos//2020/I/0/2/p/9751/505/800/9751505800_2_2_8.jpg?t=1604571949785&imwidth=563',
        'Abrigo oversize paño negro', 'Para el frio', 'negro', 42, false, 90, 50),
    ];

    this.listaArticulos.forEach(articulos => {

      let precio: number;
      if (articulos.rebajado) {
        precio = articulos.precioRebaja;
      } else {
        precio = articulos.precio;
      }
      this.total += precio;
    });

  }
  changes(event:any):void {
    this.total=0;
    this.listaArticulos.forEach(art => {
      if (art.rebajado) {
        this.total += art.precioRebaja*art.cantidad;
      } else {
        this.total +=art.precio*art.cantidad;
      }
    });
  }

}
