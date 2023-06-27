import { Component, OnInit } from '@angular/core';

export interface Corredor {
  image?: string;
  nombre: string;
  escuderia: string;
  numero: number;
  pais?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public titulo = 'Corredores';
  public corredores: Corredor[] = [];

  ngOnInit(): void {
    this.corredores = [
      {
        nombre: 'Verstappen',
        escuderia: 'Red Bull',
        image: "../assets/img/Corredores/Verstappen.jpg"
        ,numero:1
        ,pais:"../assets/img/Banderas/netherlands.png"
      },
      {
        nombre: 'Hamilton',
        escuderia: 'Mercedes',
        image: "../assets/img/Corredores/Hamilton.jpg"
        ,numero:44
        ,pais:"../assets/img/Banderas/britain.png"
      },
      {
        nombre: 'Alonso',
        escuderia: 'Aston Martin',
        image: "../assets/img/Corredores/Alonso.jpg"
        ,numero:14
        ,pais:"../assets/img/Banderas/spain.png"
      },
      {
        nombre: 'Leclerc',
        escuderia: 'Ferrari',
        image: "../assets/img/Corredores/Leclerc.jpg"
        ,numero:16
        ,pais:"../assets/img/Banderas/monaco.png"
      },
      {
        nombre: 'Norris',
        escuderia: 'MClaren',
        image: "../assets/img/Corredores/Norris.jpg"
        ,numero:4
        ,pais:"../assets/img/Banderas/britain.png"
      },
      {
        nombre: 'Ocon',
        escuderia: 'Alpine',
        image: "../assets/img/Corredores/Ocon.jpg"
        ,numero:31
        ,pais:"../assets/img/Banderas/france.png"
      },
      {
        nombre: 'Perez',
        escuderia: 'Red Bull',
        image: "../assets/img/Corredores/Perez.jpg"
        ,numero:11
        ,pais:"../assets/img/Banderas/mexico.png"
      },
      {
        nombre: 'Russel',
        escuderia: 'Mercedes',
        image: "../assets/img/Corredores/Russell.jpg"
        ,numero:63
        ,pais:"../assets/img/Banderas/britain.png"
      },
      {
        nombre: 'Sainz',
        escuderia: 'Ferrari',
        image: "../assets/img/Corredores/Sainz.jpg"
        ,numero:55
        ,pais:"../assets/img/Banderas/spain.png"
      },
      {
        nombre: 'Stroll',
        escuderia: 'Aston Martin',
        image: "../assets/img/Corredores/Stroll.jpg"
        ,numero:18
        ,pais:"../assets/img/Banderas/canada.png"
      }
    ]

  }

}


