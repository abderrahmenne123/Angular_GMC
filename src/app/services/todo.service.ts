import { Injectable } from '@angular/core';
import {Todo} from '../model/todo';
import {LoggerService} from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
private todos: Todo[] = [];
  constructor(
    private loggerService: LoggerService
  ) {

  }
  getTodos(): Todo[]{
    return  this.todos;
  }
  addTodo(todo: Todo){
    this.todos.push(todo);
  }
  deleteTodo(todo: Todo){
    const index = this.todos.indexOf(todo);
    if (index > -1){
      this.todos.splice(index, 1);
    }
  }
  loggerTodo(){
  this.loggerService.logger(this.todos);
  }
}
