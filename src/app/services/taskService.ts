import { Injectable } from "@angular/core";

export interface Task {
    id: number
    task: string
    isDone: boolean
}

@Injectable()
export class TaskService {
  data: Array<Task> = [];
  index: number = 0;

  addTask(text: string){
    this.data.unshift({
      id: this.index,
      task: text,
      isDone: false
    });
    this.index++
  } 

  deleteTask(id: number){
    let index = this.data.findIndex(value => {
      return value.id == id;
    });
    this.data = this.data.filter(value => {return value.id != this.data[index].id});
  }

  doTask(id: number){
    let index = this.data.findIndex(value => {
      return value.id == id;
    });
    this.data[index].isDone = !this.data[index].isDone;
  }
}