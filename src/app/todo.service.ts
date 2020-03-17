import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  todoList = [];

  get() {
   if(this.todoList) {
     return this.todoList;
   }
  }

  add(item) {
    if(this.todoList) {
      this.todoList.push(item);
    }
  }

}
