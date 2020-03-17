import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todoList: Array<any> = ['123', '223'];
  todoForm: FormGroup;

  
  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      todoInput: ['', Validators.required]
    });
  }

  submitTodo() {
    this.todoList.push(this.todoForm.value.todoInput);
    this.todoForm.reset();
    console.log(this.todoList);
  }
 }
