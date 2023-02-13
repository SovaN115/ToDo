import { Component, Input } from '@angular/core';
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

  formInput = new FormControl('');
  taskss: Array<Task> = [];
  private _activeCategory: number | null = null;
  @Input() set activeCategory(id: number | null){
    this._activeCategory = id;
    if(id != null) {
      this.taskss = this.taskS.getTasksByCategoryId(id);
      console.log(this.taskss)
    }
  }
  get activeCategoty() {
    return this._activeCategory;
  }
  constructor(public taskS: TaskService){
  }

  addTask( event: any){
    let id = this._activeCategory;
    if((event.code == 'Enter') && this.formInput.value != null  && id != null){
      this.taskS.addTask(this.formInput.value.trim(), id)
      this.formInput.setValue(null);
      this.taskss = this.taskS.getTasksByCategoryId(id)
    }
    console.log(this.taskss)
  } 

  deleteTask(id: number){
    this.taskS.deleteTask(id);
    this.taskss = this.taskS.getTasksByCategoryId(this._activeCategory as number);
  }

  doTask(id: number){
    this.taskS.doTask(id);
    this.taskss = this.taskS.getTasksByCategoryId(this._activeCategory as number);
  }
}
