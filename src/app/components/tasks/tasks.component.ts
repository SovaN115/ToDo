import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TaskService } from 'src/app/services/taskService';
import {Task} from 'src/app/services/taskService';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  formInput = new FormControl();

  constructor(public taskS: TaskService) {
    
  }

  onEnter(event: any){
    
    // let el = document.querySelector('.err');
    // if(el != null) {
    //   el.innerHTML = event.key;
    // }
    console
  }

  addTask( event: any){
    if((event.code == 'Enter' || event.key == 'Enter')&& this.formInput.value != null){
      this.taskS.addTask(this.formInput.value)
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
