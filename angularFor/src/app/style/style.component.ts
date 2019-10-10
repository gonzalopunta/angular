import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

  valoracion: number

  constructor() { }

  ngOnInit() {
  }

  getColor(){
    return this.valoracion >= 5 ? 'green': 'red';
  }

}
