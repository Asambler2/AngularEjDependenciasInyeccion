import { Component, inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { CalculoSuperficieService } from './calculo-superficie.service';
import { SuperficieCuadradoService } from './superficie-cuadrado.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  resultado: string = '';
  figuraForm = new FormGroup({
    figura: new FormControl(),
    medicion: new FormControl
  })
  tipo: string = 'Radio';
  servicio: CalculoSuperficieService;
  servicioCuadrado: SuperficieCuadradoService;

  constructor(servicio: CalculoSuperficieService, servicioCuadrado: SuperficieCuadradoService) {
    this.figuraForm.get("figura")?.setValue("circulo");
    this.servicio = servicio;
    this.servicioCuadrado = servicioCuadrado;
  }

  calculoFigura() {
    let resultadoDiv = document.getElementById('resultado');
    if (this.figuraForm.get('figura')?.value == 'circulo') {
      this.resultado = this.servicio.superficieCirculo(this.figuraForm.get('medicion')?.value).toString();
      if (resultadoDiv != null && this.figuraForm.get('medicion')?.value != null)resultadoDiv.innerHTML = this.resultado;
    } else {
      this.resultado = this.servicioCuadrado.superficieCuadrado(this.figuraForm.get('medicion')?.value).toString();
      if (resultadoDiv != null && this.figuraForm.get('medicion')?.value != null) resultadoDiv.innerHTML = this.resultado;
    }
  }

  figuraPlaceHolder(): void {
    if (this.figuraForm.get('figura')?.value == 'circulo') {
      this.tipo = `Radio`;
    } else {
      this.tipo = `Lado`;
    }
  }
 
}
