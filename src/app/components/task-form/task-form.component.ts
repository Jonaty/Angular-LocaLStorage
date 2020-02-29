import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
	selector: 'app-task-form',
	templateUrl: './task-form.component.html',
	styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

	@ViewChild('forma') forma: NgForm;
	public taskTitle: string;
	public taskDescription: string;

	constructor(public taskService: TaskService) { }

	ngOnInit() {
	
	}

	public addTask() {
		this.taskService.addTask({
			title: this.taskTitle,
			description: this.taskDescription,
			hide: true
		});
		this.forma.reset();
	}
}
