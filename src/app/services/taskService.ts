import { Injectable } from "@angular/core";

export interface Task {
  id: number
  task: string
  isDone: boolean
  categoryId: number
}

export interface Category {
  id: number
  title: string
  color: string
}

@Injectable()
export class TaskService {
  data: Array<Task> = [];
  taskIndex: number = 0;

  addTask(text: string, categoryId: number){
    this.data.unshift({
      id: this.taskIndex,
      task: text,
      isDone: false,
      categoryId: categoryId
    });
    this.taskIndex++
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

  getTasksByCategoryId(id: number) {
    return this.data.filter((value) => {
      return value.categoryId == id;
    })
  }

  getTasksById(ids:number[]){
    let tasks: number[] = [];
    for(let i = 0; i < ids.length; i++){
      for(let j = 0; j < this.data.length; j++)
      if(this.data[j].id === ids[i]){
        tasks.push(this.data[j].id);
      }
    }
  }

}