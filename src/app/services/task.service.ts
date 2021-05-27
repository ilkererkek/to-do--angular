import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Task } from '../Task';
import { HttpClient, HttpHeaders} from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl: string = 'http://localhost:5000/tasks';
  
  

  constructor(private htpp: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.htpp.get<Task[]>(this.apiUrl);
  }

  addTask(task: Task): Observable<Task>{
    return this.htpp.post<Task>(this.apiUrl,task, httpOptions);
  }

  deleteTask(task : Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.htpp.delete<Task>(url);
  }
  toggleReminder(task : Task): Observable<Task> {
    task.reminder = !task.reminder;
    return this.updateTask(task);
  }

  updateTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.htpp.put<Task>(url, task, httpOptions);
    
  }

}
