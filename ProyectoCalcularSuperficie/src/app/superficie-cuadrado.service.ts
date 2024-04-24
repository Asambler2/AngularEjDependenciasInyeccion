import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuperficieCuadradoService {

  constructor() { }

  superficieCuadrado(lado: number): number {
    return lado * lado;
  }
}
