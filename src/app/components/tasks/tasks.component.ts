import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/services/taskService';
import {Task} from 'src/app/services/taskService';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  route: ActivatedRoute;
  formInput = new FormControl('', Validators.required);

  constructor(public taskS: TaskService, route: ActivatedRoute) {
    this.route = route;
  }

  addTask( event: any){
    if((event.code == 'Enter' || event.key == 'Enter') && this.formInput.value != null && this.formInput.valid){
      this.taskS.addTask(this.formInput.value.trim())
      this.formInput.setValue(null);
    }
  } 

  deleteTask(id: number){
    this.taskS.deleteTask(id)
  }

  doTask(id: number){
    this.taskS.doTask(id)
  }
}
