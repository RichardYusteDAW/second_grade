import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TareaService } from '../../services/tarea.service';
import { Tarea } from '../../models/tarea';

@Component({
  selector: 'app-fin',
  imports: [RouterLink],
  templateUrl: './fin.component.html',
  styleUrl: './fin.component.css'
})
export class FinComponent {

  tarea!: Tarea;
  id!: string;

  constructor(private tareaService: TareaService, private router: Router, private myroute: ActivatedRoute) { }

  ngOnInit() {
    this.myroute.params.subscribe(params => this.id = params['id']);
    this.tareaService.findById(this.id).subscribe(data => this.tarea = data);
  }

  finalizar() {
    this.tarea.estado = "Realizada";
    this.tareaService.update(this.id, this.tarea).subscribe(data => this.router.navigate(['/tareas']));
  }
}