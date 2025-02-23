import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  url: string = 'http://localhost:3000/tareas';
  password: string = '123';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(this.url);
  }

  findById(id: string): Observable<Tarea> {
    return this.http.get<Tarea>(`${this.url}/${id}`);
  }

  update(id: string, tarea: Tarea): Observable<Tarea> {
    return this.http.put<Tarea>(`${this.url}/${id}`, tarea);
  }

  delete(id: string): Observable<Tarea> {
    return this.http.delete<Tarea>(`${this.url}/${id}`);
  }

  getPassword(): boolean {
    let pass = prompt('Introduce la contraseña');
    return pass === this.password;
  }
}