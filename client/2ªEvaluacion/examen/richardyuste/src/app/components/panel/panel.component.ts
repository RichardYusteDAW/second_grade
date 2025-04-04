import { Component } from '@angular/core';
import { Tarea } from '../../models/tarea';
import { TareaService } from '../../services/tarea.service';
import { RouterLink } from '@angular/router';
import { TareaComponent } from "../tarea/tarea.component";

@Component({
  selector: 'app-panel',
  imports: [RouterLink, TareaComponent],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent {

  tareas: Tarea[] = [];

  constructor(private tareaService: TareaService) { }

  ngOnInit() {
    this.loadTareas();
  }

  loadTareas() {
    this.tareaService.findAll().subscribe(tareas => this.tareas = tareas);
  }
}