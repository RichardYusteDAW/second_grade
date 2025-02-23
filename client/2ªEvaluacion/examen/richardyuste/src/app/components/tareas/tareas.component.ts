import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarea } from '../../models/tarea';
import { TareaService } from '../../services/tarea.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tareas',
  imports: [FormsModule],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {

  tareas: Tarea[] = [];
  tareasFiltradas: Tarea[] = [];
  estado: string = 'Todas';
  pendientes: number = 0;
  realizadas: number = 0;

  constructor(private tareaService: TareaService, private router: Router) { }

  ngOnInit() {
    this.loadTareas();
  }

  loadTareas() {
    this.tareaService.findAll().subscribe(data => {
      this.tareas = data
      this.tareasFiltradas = this.tareas;
      this.pendientes = this.tareas.filter(t => t.estado == "Pendiente").length;
      this.realizadas = this.tareas.filter(t => t.estado == "Realizada").length;
    });
  }

  filtrar() {
    if (this.estado == 'Todas') {
      this.tareasFiltradas = this.tareas;
    } else {
      this.tareasFiltradas = this.tareas.filter(t => t.estado == this.estado);
    }
  }

  finalizar(id: string) {
    this.router.navigate(['/tareas/fin', id]);
  }
}