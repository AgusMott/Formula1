import { Component, OnInit, Input } from '@angular/core';
import { ServicioCorredores } from '../service';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent implements OnInit {

  
  public image?: string;
  public nombre: string = "";
  public escuderia: string = "";
  
  @Input() dataEntrante: any;

  constructor(private servicioCorredores: ServicioCorredores) { }
  ngOnInit(): void {
  }
    AgregarALista() {
      this.servicioCorredores.diparadorCorredores.emit(
        { data: this.dataEntrante }
      )
    }
}