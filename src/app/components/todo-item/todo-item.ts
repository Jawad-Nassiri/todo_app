import { Component, Input, Output, EventEmitter, output } from '@angular/core';

@Component({
  selector: 'todo-item',
  imports: [],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css',
})
export class TodoItem {
  @Input() todo!: { id: number; text: string; completed: boolean };
  @Output() toggle = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  onToggle() {
    this.toggle.emit(this.todo.id);
  }

  deleteTodo() {
    this.delete.emit(this.todo.id);
  }

}
