import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task'
import { Subscription } from 'rxjs'
import { UiService } from '../../services/ui.service'
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

  showAddTask: boolean = false;
  subscription: Subscription | undefined ;
  
  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
  }

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
  
  toggleTaskForm(): void {
    this.uiService.toggleAddTask()
  }


}
