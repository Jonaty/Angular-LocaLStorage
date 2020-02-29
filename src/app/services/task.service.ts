import { Injectable } from '@angular/core';
import { Task } from '../models/Task';

@Injectable({
	providedIn: 'root'
})
export class TaskService {

	public tasks: Task[] = [];
	constructor() {
		this.tasks = [
			{ title: 'Read', description: 'I have to read', hide: true },
			{ title: 'Write', description: 'I have to write', hide: true }
		];
	}

	getTasks() {
		return this.tasks;
	}

	addTask(task: Task) {
		this.tasks.push(task);
	}

	deleteTask(task: Task) {
		for (let i = 0; i < this.tasks.length; i++) {
			if (task === this.tasks[i]) {
				this.tasks.splice(i, 1);
			}
		}
	}


}
