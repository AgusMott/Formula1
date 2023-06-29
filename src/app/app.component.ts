import { Component, OnInit } from '@angular/core';


export interface Corredor {
  image?: string;
  nombre: string;
  escuderia: string;
  numero: string;
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
        nombre: 'Max VERSTAPPEN',
        escuderia: 'RED BULL',
        image: "../assets/img/Corredores/Verstappen.jpg",
        numero: '#1',
        pais:"../assets/img/Banderas/netherlands.png"
      },
      {
        nombre: 'Sergio PÉREZ',
        escuderia: 'RED BULL',
        image: "../assets/img/Corredores/Perez.jpg",
        numero: '#11',
        pais:"../assets/img/Banderas/mexico.png"
      },
      {
        nombre: 'Lewis HAMILTON',
        escuderia: 'MERCEDES',
        image: "../assets/img/Corredores/Hamilton.jpg",
        numero: '#44',
        pais:"../assets/img/Banderas/britain.png"
      },
      {
        nombre: 'George RUSSELL',
        escuderia: 'MERCEDES',
        image: "../assets/img/Corredores/Russell.jpg",
        numero: '#63',
        pais:"../assets/img/Banderas/britain.png"
      },
      {
        nombre: 'Fernando ALONSO',
        escuderia: 'ASTON MARTIN',
        image: "../assets/img/Corredores/Alonso.jpg",
        numero: '#14',
        pais:"../assets/img/Banderas/spain.png"
      },
      {
        nombre: 'Lance STROLL',
        escuderia: 'ASTON MARTIN',
        image: "../assets/img/Corredores/Stroll.jpg",
        numero: '#18',
        pais:"../assets/img/Banderas/canada.png"
      },
      {
        nombre: 'Charles LECLERC',
        escuderia: 'FERRARI',
        image: "../assets/img/Corredores/Leclerc.jpg",
        numero: '#16',
        pais:"../assets/img/Banderas/monaco.png"
      },
      {
        nombre: 'Carlos SAINZ',
        escuderia: 'FERRARI',
        image: "../assets/img/Corredores/Sainz.jpg",
        numero: '#55',
        pais:"../assets/img/Banderas/spain.png"
      },
      {
        nombre: 'Pierre GASLY',
        escuderia: 'ALPINE',
        image: "../assets/img/Corredores/Gasly.jpg",
        numero: '#10',
        pais:"../assets/img/Banderas/france.png"
      },
      {
        nombre: 'Esteban OCON',
        escuderia: 'ALPINE',
        image: "../assets/img/Corredores/Ocon.jpg",
        numero: '#31',
        pais:"../assets/img/Banderas/france.png"
      }
    ]

  }

}


