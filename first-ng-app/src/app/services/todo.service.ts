import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
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
  constructor() { }
}
