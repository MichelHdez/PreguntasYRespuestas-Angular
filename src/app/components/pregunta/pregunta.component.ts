import { Component, OnInit } from '@angular/core';
import { BotoneraComponent } from './botonera/botonera.component';
import { PreguntaService } from '../../services/pregunta.service';
import { Pregunta } from '../../models/pregunta';
import { CommonModule } from '@angular/common';
import { Respuesta } from '../../models/respuesta';

@Component({
  selector: 'app-pregunta',
  standalone: true,
  imports: [BotoneraComponent, CommonModule],
  templateUrl: './pregunta.component.html',
  styleUrl: './pregunta.component.css'
})
export class PreguntaComponent implements OnInit {
  listPregunta!: Pregunta[];

  constructor(public preguntaService: PreguntaService) { }

  //Cuando se inicialice el componente, se rellena con el metodo de getPregunta
  ngOnInit(): void {
    this.listPregunta = this.preguntaService.getPreguntas();
  }

  obtenerPregunta() {
    return this.listPregunta[this.preguntaService.indexPregunta].descripcion;
  }

  respuestaSeleccionada(respuesta: Respuesta, indexRta: number) {
    if (this.preguntaService.pregConfirmada === true){
      return;
    }
    this.preguntaService.opcionSeleccionada = respuesta;
    this.preguntaService.deshabilitarBtn = false;
    this.preguntaService.indexRespuesta = indexRta;
  }

  AddClassOption(respuesta: Respuesta) {
    // Pregunta Seleccionada y NO está confirmada
    if (respuesta === this.preguntaService.opcionSeleccionada && !this.preguntaService.pregConfirmada) {
      return 'active-text-light';
    }

    // Respuesta Correcta
    if (respuesta === this.preguntaService.opcionSeleccionada 
      && this.preguntaService.pregConfirmada && this.preguntaService.opcionSeleccionada.esCorrecta === 1) {
      return 'list-group-item-success';
    }

    // Respuesta Incorrecta
    if (respuesta === this.preguntaService.opcionSeleccionada 
      && this.preguntaService.pregConfirmada && this.preguntaService.opcionSeleccionada.esCorrecta === 0) {
      return 'list-group-item-danger';
    }
    return '';
  }

  iconCorrecta(respuesta: Respuesta){
    if (respuesta === this.preguntaService.opcionSeleccionada 
      && this.preguntaService.pregConfirmada && this.preguntaService.opcionSeleccionada.esCorrecta === 1) {
      return true;
    } else {
      return false;
    }
  }

  iconIncorrecta(respuesta: Respuesta){
    if (respuesta === this.preguntaService.opcionSeleccionada 
      && this.preguntaService.pregConfirmada && this.preguntaService.opcionSeleccionada.esCorrecta === 0) {
      return true;
    } else {
      return false;
    }
  }
}
