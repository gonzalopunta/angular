import { Component, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { Articulo } from 'src/app/models/Articulo';
import { CarritoService } from 'src/app/service/carrito.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.scss']
})
export class ArticulosComponent implements OnInit {

  private carrito: Array<Articulo> = [];
  private total: number;

  constructor(private carritoService: CarritoService) { }

  ngOnInit() {
    /*this.carritoService.getArticulos().subscribe(data => {
      console.log(data);
      this.carrito = data;

    },
      error => alert(error));*/
  }

}
