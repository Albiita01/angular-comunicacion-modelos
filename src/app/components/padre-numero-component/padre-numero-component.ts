import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-numero-component',
  standalone: false,
  styleUrl: './padre-numero-component.css',
  templateUrl: './padre-numero-component.html',
})
export class PadreNumeroComponent {

  public suma: number;
  public arrayNumeros: Array<number>;


  constructor() {
    this.suma = 0;
    this.arrayNumeros = [2, 5, 6]
  }


  sumarNumerosParent(numeroRecibido: number): void {
    this.suma += numeroRecibido;
  }

  generarNumero(): void {
    let random = Math.floor((Math.random() * 100) + 1);
    this.arrayNumeros.push(random);
  }

}
