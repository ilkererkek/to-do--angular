import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs'
import { Task } from '../Task';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl: string = 'http://localhost:5000/tasks';
  
  constructor(private htpp: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.htpp.get<Task[]>(this.apiUrl);
  }
}
