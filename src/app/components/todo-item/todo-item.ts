import { Component, Input } from '@angular/core';

@Component({
  selector: 'todo-item',
  imports: [],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css',
})
export class TodoItem {
  @Input() todo!: { id: number; text: string; completed: boolean };
}
