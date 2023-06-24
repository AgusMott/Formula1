import { Component} from '@angular/core';
import {Corredor} from '../app.component';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  corredores!:Corredor[];

  borrarCorredor(corredor: any){
    this.corredores.splice(corredor, 1);
  }
}
