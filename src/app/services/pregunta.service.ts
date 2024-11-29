import { Injectable } from '@angular/core';
import { Respuesta } from '../models/respuesta';
import { Pregunta } from '../models/pregunta';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  indexPregunta = 0;
  opcionSeleccionada: Respuesta | undefined;
  deshabilitarBtn = true;
  pregConfirmada = false;
  indexRespuesta = 0;
  respuestasUsuario: Array<number> = [];

  public preguntas: Pregunta[] = [
    new Pregunta('¿Cuál es la capital de México?', [
      new Respuesta('Ciudad de México', 1),
      new Respuesta('Buenos Aires', 0),
      new Respuesta('Santiago', 0),
      new Respuesta('Lima', 0),
    ]),
    new Pregunta('¿Cuál es la capital de Francia?', [
      new Respuesta('Ciudad de México', 0),
      new Respuesta('Paris', 1),
      new Respuesta('Dublin', 0),
      new Respuesta('Atenas', 0),
    ]),
    new Pregunta('¿Cuál es la capital de Egipto?', [
      new Respuesta('Ciudad de México', 0),
      new Respuesta('Buenos Aires', 0),
      new Respuesta('El Cairo', 1),
      new Respuesta('Casablanca', 0),
    ]),
  ];
  constructor() { }

  getPreguntas(){
    return this.preguntas.slice();
  }
}
