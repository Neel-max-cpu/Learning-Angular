import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: async ()=>{
            return import('./home/home.component').then(
                (module)=>module.HomeComponent
            );
        },
    },
    {
        path: 'todos',
        pathMatch: 'full',
        loadComponent: async ()=>{
            return import('./todos/todos.component').then(
                (m)=>m.TodosComponent
            );
        },
    },
];
