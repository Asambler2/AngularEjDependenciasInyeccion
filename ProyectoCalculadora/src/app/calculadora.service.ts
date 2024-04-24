import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor() { }

  dameSuma(num1: number, num2: number): number {
    return num1 + num2;
  }
  dameResta(num1: number, num2: number): number {
    return num1 - num2;
  }
  dameDivision(num1: number, num2: number): number {
    return num1 % num2;
  }
  dameMultiplicacion(num1: number, num2: number): number {
    return num1 * num2;
  }
}
