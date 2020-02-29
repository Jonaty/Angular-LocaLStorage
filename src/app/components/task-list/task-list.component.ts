import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  public listTasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.listTasks = this.taskService.getTasks();
  }

}
