import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './models/task.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'task-manager';

  tasks$: Observable<Task[]>;

  constructor(
    private db: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.tasks$ = this.db.collection<Task>('/tasks').valueChanges();
  }
}
