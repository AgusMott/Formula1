import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ServicioCorredores {
  
  @Output() diparadorCorredores: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
