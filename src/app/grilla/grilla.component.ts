import { Component, OnInit, Input } from '@angular/core';
import { ServicioCorredores } from '../service';
import { Corredor} from '../app.component';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent implements OnInit {
  
  public image?: string;
  public nombre:string ="";
  public escuderia: string = "";

  corredor!: Corredor[];
  @Input() dataEntrante: any;

  constructor(private servicioCorredores: ServicioCorredores) { }
  ngOnInit(): void {
  }
 
  AgregarALista() {
      this.servicioCorredores.disparadorCorredores.emit(
        { data: this.dataEntrante }
      )
      
  }
}
