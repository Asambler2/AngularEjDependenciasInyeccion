import { Component, inject } from '@angular/core';
import { HeroService} from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '';
  resultado: number = 0;
  private servicio: HeroService;
  constructor(servicio: HeroService) {
    this.servicio = servicio;
    this.resultado = servicio.sumarCosas(4, 6);
    this.title = 'El resultado es: ' + this.resultado;
  }

  // Otra forma de hacer la inyección de dependencias:
  sumar() {
    let servicio = inject(HeroService);
    servicio.sumarCosas(4, 4);
  }
}
