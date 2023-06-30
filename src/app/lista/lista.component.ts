import { Component,OnInit} from '@angular/core';
import { ServicioCorredores } from '../service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})


export class ListaComponent implements OnInit{

  public corredores:Array<any> = [];
  
  constructor(private router: Router,private servicioCorredores: ServicioCorredores) { }
  ngOnInit(): void {
    this.servicioCorredores.disparadorCorredores.subscribe(
      data => { this.corredores.push(data) }
    )
  }
  navegarAComponenteDestino(corredor: any): void {
    this.router.navigate(['/llegada'], { state: { corredor } });
  }
  
  borrarCorredor(corredor: any){
    let index = this.corredores.indexOf(corredor);
    this.corredores.splice(index, 1);
  }
}

