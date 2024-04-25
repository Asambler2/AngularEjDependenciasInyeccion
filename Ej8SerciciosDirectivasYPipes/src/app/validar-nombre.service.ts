import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidarNombreService {

  constructor() { }

  validarNombre(nombre: string): boolean {
    const pattern = new RegExp('^[A-Z]+$', 'i');
    return nombre.length > 3 && nombre.length < 50 && !nombre.includes('ñ') && pattern.test(nombre);
  }
}
