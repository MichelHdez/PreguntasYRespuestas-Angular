import { Respuesta } from "./respuesta";

export class Pregunta {
    descripcion: string;
    respuestas: Respuesta[];
    descripcionPregunta: any;

    constructor(descripcion: string, respuestas: Respuesta[]) {
        this.descripcion = descripcion;
        this.respuestas = respuestas;
    }
}