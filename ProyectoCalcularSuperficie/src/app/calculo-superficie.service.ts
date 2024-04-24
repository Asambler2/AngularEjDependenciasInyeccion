import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculoSuperficieService {

  constructor() { }

  superficieCirculo(radio: number): number {
    return Math.ceil((Math.PI * radio * radio) * 100) / 100;
  }
}
