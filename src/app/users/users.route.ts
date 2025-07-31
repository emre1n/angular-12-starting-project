import { Routes } from '@angular/router';

import { NewTaskComponent } from '../tasks/new-task/new-task.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { TasksComponent } from '../tasks/tasks.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full',
  },
  {
    path: 'tasks', // <your-domain>/users/<user-id>/tasks
    component: TasksComponent,
  },
  {
    path: 'tasks/new', // <your-domain>/users/<user-id>/tasks/new
    component: NewTaskComponent,
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];
