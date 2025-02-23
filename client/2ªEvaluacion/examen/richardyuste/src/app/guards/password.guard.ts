import { CanActivateFn, Router } from '@angular/router';
import { TareaService } from '../services/tarea.service';
import { inject } from '@angular/core';

export const passwordGuard: CanActivateFn = (route, state) => {

  if (inject(TareaService).getPassword()) {
    return true;
  } else {
    inject(Router).navigate(['/tareas/panel/error']);
    return false;
  }
};
