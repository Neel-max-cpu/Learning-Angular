import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { NgIf } from '@angular/common';
import { TodoItemComponent } from '../component/todo-item/todo-item.component';
import {FormsModule} from "@angular/forms";
import { FilterTodosPipe } from '../pipes/filter-todos.pipe';

@Component({
  selector: 'app-todos',
  imports: [TodoItemComponent, FormsModule, FilterTodosPipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  todoService = inject(TodoService);
  todoItems = signal<Array<Todo>>([]);
  searchTerm = signal('');

  ngOnInit(): void {
    /*
    console.log(this.todoService.todoItems);
    this.todoItems.set(this.todoService.todoItems);
    */

    // /*
    this.todoService.getTodosFromApi().pipe(
      catchError((error)=>{
        console.log(error);
        throw error;
      })
    ).subscribe((todos)=>{
      console.log('Fetched todos:', todos);
      this.todoItems.set(todos);
    })
      // */
  }


  updateTodoItems(todoItems: Todo){
    this.todoItems.update((todos)=>{
      return todos.map(todo=>{
        if(todo.id === todoItems.id){
          return{
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo;
      })
    })
  }
}
