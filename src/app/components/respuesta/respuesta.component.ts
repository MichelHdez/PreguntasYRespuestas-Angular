import { Component, OnInit } from '@angular/core';
import { Pregunta } from '../../models/pregunta';
import { PreguntaService } from '../../services/pregunta.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-respuesta',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './respuesta.component.html',
  styleUrl: './respuesta.component.css'
})
export class RespuestaComponent implements OnInit {
  listPreguntas!: Pregunta[];
  respuestasUsuario!: any[];
  
  constructor(private preguntaService: PreguntaService, private router: Router){}
  ngOnInit(): void {
    this.listPreguntas = this.preguntaService.preguntas;
    this.respuestasUsuario = this.preguntaService.respuestasUsuario;
  }

  volver(){
    this.preguntaService.respuestasUsuario = [];
    this.router.navigate(['/']);
  }
}
