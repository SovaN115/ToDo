import { Injectable } from "@angular/core";

export interface Category {
    id: number
    title: string
    color: string
}

@Injectable()
export class CategoryService {
    categories: Array<Category> = [];
    categoryIndex: number = 0;
    colors: string[] = ['bg-red-400' , 'bg-green-400' , 'bg-indigo-400' , 'bg-yellow-400' , 'bg-orange-400' , 'bg-blue-400'];

    addCategory(text: string){
        this.categories.unshift({
          id: this.categoryIndex,
          title: text,
          color: this.colors[this.getRandomInt(6)]
        });
        this.categoryIndex++
    } 

    // deleteGategory(id: number){
    //     let index = this.data.findIndex(value => {
    //     return value.id == id;
    //     });
    //     this.data = this.data.filter(value => {return value.id != this.data[index].id});
    // }

    // enterGategory(id: number){
    //     let index = this.data.findIndex(value => {
    //     return value.id == id;
    //     });
    //     this.data[index].isDone = !this.data[index].isDone;
    // }

    private getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }
} 