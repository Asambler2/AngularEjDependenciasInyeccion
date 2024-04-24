import { Component } from '@angular/core';
import { ValidarNombreService } from './validar-nombre.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  nombreCorrecto: string = '';
  textCorrecto = 'Nombre validado y correcto';
  textIncorrecto = 'Nombre validado e incorrecto';

  validador: ValidarNombreService;
  nombreForm = new FormGroup({
    nombre: new FormControl()
  })
  constructor(validador: ValidarNombreService) {
    this.validador = validador;
  }

  comprobarNombre() {
    if (this.validador.validarNombre(this.nombreForm.get('nombre')?.value)) {
      this.nombreCorrecto = 'correcto';
    } else {
      this.nombreCorrecto = 'incorrecto';
    }
  }
}
