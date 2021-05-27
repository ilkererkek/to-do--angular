import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task'
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter<Task>();
  
  text: string = '';
  date: string = '';


  reminder: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if(!this.text){
      alert('Please add a text')
      return;
    }
    const newTask: Task = {
      text: this.text,
      day: this.date,
      reminder: this.reminder
    }
    
    this.onAddTask.emit(newTask);

    this.text = '';
    this.date = '';
    this.reminder = false;
  }

}
