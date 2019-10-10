import { Component, OnInit, Input } from '@angular/core';
import { ciudad } from '../models/ciudad';

@Component({
  selector: 'app-ciudad-detalle',
  templateUrl: './ciudad-detalle.component.html',
  styleUrls: ['./ciudad-detalle.component.css']
})
export class CiudadDetalleComponent implements OnInit {
  @Input() ciudad:ciudad;
  
  constructor() { }

  ngOnInit() {
  }

}
