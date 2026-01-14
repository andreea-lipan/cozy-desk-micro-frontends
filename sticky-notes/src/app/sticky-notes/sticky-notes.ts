import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

interface Todo {
  text: string;
  done: boolean;
}

@Component({
  selector: 'app-sticky-notes',
  imports: [
    FormsModule
  ],
  templateUrl: './sticky-notes.html',
  styleUrl: './sticky-notes.css',
})
export class StickyNotes {
  todos: Todo[] = [];
  newTodo = '';

  addTodo() {
    if (!this.newTodo.trim()) return;

    this.todos.push({
      text: this.newTodo.trim(),
      done: false
    });

    this.newTodo = '';
  }

  toggle(todo: Todo) {
    todo.done = !todo.done;
  }

  remove(index: number) {
    this.todos.splice(index, 1);
  }
}
