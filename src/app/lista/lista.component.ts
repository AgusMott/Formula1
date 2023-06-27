import { Component,OnInit} from '@angular/core';
import {Corredor} from '../app.component';
import { ServicioCorredores } from '../service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit{
  public corredores:Array<any> = [];
  constructor(private servicioCorredores: ServicioCorredores) { }
  ngOnInit(): void {
    this.servicioCorredores.diparadorCorredores.subscribe(
      data => { this.corredores.push(data) }
    )
  }
  //corredores!:Corredor[];
  borrarCorredor(corredor: any){
    this.corredores.splice(corredor, 1);
  }
}
