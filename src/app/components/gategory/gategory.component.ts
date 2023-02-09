import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Category, TaskService } from 'src/app/services/taskService';

@Component({
  selector: 'app-gategory',
  templateUrl: './gategory.component.html',
  styleUrls: ['./gategory.component.css']
})
export class GategoryComponent {
  categories: Array<Category>
  input: FormControl = new FormControl();
  @Output() activeCategory: EventEmitter<Category> = new EventEmitter()
  
  constructor(public taskS: TaskService){
    this.taskS = taskS;
    this.categories = taskS.categories;
  }

  addGategory(event: any){
    if((event.code == 'Enter' || event.key == 'Enter') && this.input.value != null && this.input.valid){
      this.taskS.addCategory(this.input.value.trim())
      this.input.setValue(null);
    }
  }
}
