import { Injectable, Output, EventEmitter } from '@angular/core';
import { Corredor } from './app.component';

@Injectable({
  providedIn: 'root'
})

export class ServicioCorredores {
  corredores!:Corredor[];
  
  @Output() diparadorCorredores: EventEmitter<any> = new EventEmitter();

  constructor() { }
  addCorredor(corredor: Corredor) {
    this.corredores.push(corredor);
  }
}
