import { Component } from '@angular/core';
import { CalculadoraService } from './calculadora.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '';
  calculadora: CalculadoraService

  constructor(calculadora: CalculadoraService) {
    let num1 = 5;
    let num2 = 4;
    this.calculadora = calculadora;
    this.title = 'Suma ' + num1 + ' + ' + num2 + ' = ' + calculadora.dameSuma(num1, num2) + '\n';
    this.title += 'Resta ' + num1 + ' - ' + num2 + ' = ' + calculadora.dameResta(num1, num2) + '\n';
    this.title += 'Division ' + num1 + ' % ' + num2 + ' = ' + calculadora.dameDivision(num1, num2) + '\n';
    this.title += 'Multiplicación ' + num1 + ' x ' + num2 + ' = ' + calculadora.dameMultiplicacion(num1, num2);
  }
}
