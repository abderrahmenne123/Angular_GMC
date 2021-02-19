import { Component, OnInit } from '@angular/core';
import {Todo} from '../model/todo';
import {TodoService} from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
todo = new Todo();
todos: Todo[] ;
  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  // tslint:disable-next-line:typedef
  addTodo() {
    if (this.todo.length){
      this.todo.id = this.todo[this.todos.length - 1].id + 1;
    }else {
      this.todo.id = 1 ;
    }

    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
  }


  // tslint:disable-next-line:typedef
  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
