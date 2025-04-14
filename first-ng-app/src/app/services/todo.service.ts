import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  http = inject(HttpClient);
  /*
  todoItems: Array<Todo> = [{
    title: 'food',
    id: 0,
    userId: 1,
    completed: false,
  },{
    title: 'books',
    id: 1,
    userId: 1,
    completed: false,
  },{
    title: 'exercise',
    id: 2,
    userId: 1,
    completed: false,
  },{
    title: 'car wash',
    id: 3,
    userId: 1,
    completed: false,
  }]
  */

  getTodosFromApi(){
    const url = `https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Array<Todo>>(url);
  }
}
