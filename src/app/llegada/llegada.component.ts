import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-llegada',
  templateUrl: './llegada.component.html',
  styleUrls: ['./llegada.component.css']
})
export class LlegadaComponent implements OnInit {
  public corredores: any[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // Obtener los corredores desde el parámetro 'corredores' en la ruta
      this.corredores = params['corredores'];

      // Ordenar los corredores de manera aleatoria
      this.shuffleCorredores();
    });
  }

  shuffleCorredores(): void {
    // Utilizar el algoritmo de Fisher-Yates para mezclar los corredores aleatoriamente
    for (let i = this.corredores.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.corredores[i], this.corredores[j]] = [this.corredores[j], this.corredores[i]];
    }
  }
}
