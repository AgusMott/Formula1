import { Component,OnInit} from '@angular/core';
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
    this.servicioCorredores.disparadorCorredores.subscribe(
      data => { this.corredores.push(data) }
    )
  }
  
  borrarCorredor(corredor: any){
    let index = this.corredores.indexOf(corredor);
    this.corredores.splice(index, 1);
  }
}
