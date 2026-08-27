import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoItem } from '../todo-item/todo-item';

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule, TodoItem],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  todos: { id: number; text: string; completed: boolean }[] = [];
  newTodo: string = '';
  activeTab: 'undone' | 'done' = 'undone';

  addTodo() {
    if (!this.newTodo.trim()) return;

    this.todos.push({ id: Date.now(), text: this.newTodo, completed: false });
    this.newTodo = '';
  }

  get undoneCount() {
  return this.todos.filter(t => !t.completed).length;
}

get doneCount() {
  return this.todos.filter(t => t.completed).length;
}

  toggleTodo(id: number) {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) todo.completed = !todo.completed;
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((t) => t.id !== id);
  }

  editTodo(event: { id: number; text: string }) {
    const todo = this.todos.find((t) => t.id === event.id);

    if (todo) {
      todo.text = event.text;
    }
  }
}
