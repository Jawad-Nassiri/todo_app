import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'todo-item',
  imports: [FormsModule],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css',
})
export class TodoItem {
  @Input() todo!: { id: number; text: string; completed: boolean };
  @Output() toggle = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();
  isEditing = false;
  editText  = '';
  @Output() edit = new EventEmitter<{ id: number; text: string }>();
  
  onToggle() {
    this.toggle.emit(this.todo.id);
  }

  deleteTodo() {
    this.delete.emit(this.todo.id);
  }

editTodo() {
  this.edit.emit({ id: this.todo.id, text: this.editText });
  this.isEditing = false;
}
}
