import { Component, OnInit } from '@angular/core';


interface Corredor {
  /**
   
   * La variable image va a tener asignada una URL, por lo cual
   * corresponde declarar el tipo string.
   * En TypeScript, el nombre del tipo string se escribe con minúsculas.
  */
  image?: string;
  titulo: string;
  subtitulo: string;
}

/**
 * https://angular.io/api/core/Component
 * El decorador @Component marca una clase como un componente Angular 
 * y proporciona metadatos de configuración que determinan cómo se 
 * debe procesar, crear instancias y usar el componente en 
 * tiempo de ejecución.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public titulo = 'Corredores';

  /**
   * La propiedad tarjetas está declarada como un array de tipo Tarjeta.
   * Tarjeta es la interfaz que declaramos algunas líneas más arriba.
   * Sabemos que se trata de un array porque están los corchetes [].
   */
  public corredores: Corredor[] = [];

  /**
   * La clase de este componente implementa la interfaz OnInit.
   * Por lo tanto, necesita implementar el método ngOnInit().
   * Este método se ejecuta después de que el constructor de esta clase
   * ha terminado de instanciar el componente. Este es el lugar
   * en el que se realizan aquellas acciones de inicialización que
   * requieren que el componente ya esté instanciado.
   */
  ngOnInit(): void {

    /**
     * Esta es tarjetas, la colección que luego recorreremos con la directiva
     * *ngFor, para ir creando componentes card, a los cuales les
     * vamos a asignar los datos que iremos tomando de los ítems
     * de esta colección. Por eso aquí y ahora le estamos cargando
     * a la colección tarjetas los ítems correspondientes, para que luego
     * los encontremos cuando recorramos la colección.
     * 
     * Notar que los ítems de esta colección tienen las mismas propiedades
     * que la interfaz Tarjeta. Eso es porque la colección tarjetas
     * se declaró como un array de tipo Tarjeta.
     * La interfaz Tarjeta y la colección tarjetas no son el mismo objeto.
     * Son dos objetos independientes y diferentes, cumplen funciones 
     * distintas en la aplicación.
     * En particular, la colección tarjetas lo único que hace es tener
     * almacenados los datos que vamos a necesitar luego, a la hora
     * de crear los componentes Card.
     */
    this.corredores = [
      {
        titulo: 'Verstappen',
        subtitulo: 'Red Bull',
        image: "../assets/img/corredores/Verstappen.jpg"
      },
      {
        titulo: 'Hamilton',
        subtitulo: 'Mercedes',
        image: "../assets/img/corredores/Hamilton.jpg"
      },
      {
        titulo: 'Alonso',
        subtitulo: 'Aston Martin',
        image: "../assets/img/corredores/Alonso.jpg"
      },
      {
        titulo: 'Leclerc',
        subtitulo: 'Ferrari',
        image: "../assets/img/corredores/Leclerc.jpg"
      },
      {
        titulo: 'Norris',
        subtitulo: 'MClaren',
        image: "../assets/img/corredores/Norris.jpg"
      },
      {
        titulo: 'Ocon',
        subtitulo: 'Alpine',
        image: "../assets/img/corredores/Ocon.jpg"
      },
      {
        titulo: 'Perez',
        subtitulo: 'Red Bull',
        image: "../assets/img/corredores/Perez.jpg"
      },
      {
        titulo: 'Russel',
        subtitulo: 'Mercedes',
        image: "../assets/img/corredores/Russel.jpg"
      },
      {
        titulo: 'Sainz',
        subtitulo: 'Ferrari',
        image: "../assets/img/corredores/Sainz.jpg"
      },
      {
        titulo: 'Stroll',
        subtitulo: 'Aston Martin',
        image: "../assets/img/corredores/Stroll.jpg"
      }
    ]

  }
}


