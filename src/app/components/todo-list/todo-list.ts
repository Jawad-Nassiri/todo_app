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

  toggleTodo(id: number) {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) todo.completed = !todo.completed;
    console.log(this.todos);
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((t) => t.id !== id);
  }
}
