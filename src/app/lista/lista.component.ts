import { Component, OnInit } from '@angular/core';
import {Corredor} from './app.component';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  corredores!:corredor[];

  (cliente: any){
    this.corredores.splice(cliente, 1);
  }
}
