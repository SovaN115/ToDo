import { Injectable } from "@angular/core";

export interface Task {
  id: number
  task: string
  isDone: boolean
}

export interface Category {
  id: number
  title: string
  color: string
}

@Injectable()
export class TaskService {
  data: Array<Task> = [];
  categories: Array<Category> = [];
  colors: string[] = ['bg-red-400' , 'bg-green-400' , 'bg-indigo-400' , 'bg-yellow-400' , 'bg-orange-400' , 'bg-blue-400'];
  taskIndex: number = 0;
  categoryIndex: number = 0;

  addTask(text: string){
    this.data.unshift({
      id: this.taskIndex,
      task: text,
      isDone: false
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

  addCategory(text: string){
    this.categories.unshift({
      id: this.categoryIndex,
      title: text,
      color: this.colors[this.getRandomInt(6)]
    });
    this.categoryIndex++
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

  // deleteGategory(id: number){
  //   let index = this.data.findIndex(value => {
  //     return value.id == id;
  //   });
  //   this.data = this.data.filter(value => {return value.id != this.data[index].id});
  // }

  // enterGategory(id: number){
  //   let index = this.data.findIndex(value => {
  //     return value.id == id;
  //   });
  //   this.data[index].isDone = !this.data[index].isDone;
  // }

  private getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
}