import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task = {
    text: '',
    day: '',
    reminder: false,
    id: 0,
  };

  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() onToggleTask: EventEmitter<Task> = new EventEmitter<Task>();
  
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onDelete(task: Task): void {
    this.onDeleteTask.emit(task);
  }
  onToggle(task: Task): void {
    this.onToggleTask.emit(task);
  }
}
