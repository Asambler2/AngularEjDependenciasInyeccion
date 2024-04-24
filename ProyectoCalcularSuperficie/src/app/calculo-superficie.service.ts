import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculoSuperficieService {

  constructor() { }

  superficieCuadrado(lado: number): number {
    return lado * lado;
  }
  superficieCirculo(radio: number): number {
    return Math.ceil((Math.PI * radio * radio) * 100) / 100;
  }
}
