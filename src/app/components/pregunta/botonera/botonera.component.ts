import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PreguntaService } from '../../../services/pregunta.service';
import { Respuesta } from '../../../models/respuesta';

@Component({
  selector: 'app-botonera',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './botonera.component.html',
  styleUrl: './botonera.component.css'
})
export class BotoneraComponent {

  btnString = 'Aceptar';
  constructor(public preguntaService: PreguntaService, private router: Router) { }

  siguiente() {
    switch (this.btnString) {
      case 'Aceptar': {
        this.preguntaService.pregConfirmada = true;
        this.btnString = 'Siguiente';

        if(this.preguntaService.preguntas.length -1 === this.preguntaService.indexPregunta) {
          this.btnString = 'Finalizar';
        }
        break;
      }
      
      case 'Siguiente': {
        this.preguntaService.indexPregunta++;
        this.preguntaService.respuestasUsuario.push(this.preguntaService.indexRespuesta);
        this.preguntaService.deshabilitarBtn = true;
        this.preguntaService.pregConfirmada = false;
        this.btnString = 'Aceptar';
        break;
      }
      case 'Finalizar': {
        this.preguntaService.respuestasUsuario.push(this.preguntaService.indexRespuesta);
        this.preguntaService.opcionSeleccionada = new Respuesta('', 0);
        this.preguntaService.pregConfirmada = false;
        this.preguntaService.indexPregunta = 0;
        this.router.navigate(['/respuesta']);
        break;
      }
    }
  }
}
