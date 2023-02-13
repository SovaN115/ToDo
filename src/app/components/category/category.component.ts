import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CategoryService } from 'src/app/services/categoryService';
import { Category, TaskService } from 'src/app/services/taskService';

@Component({
  selector: 'app-gategory',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categories: Array<Category>
  input: FormControl = new FormControl();
  @Output() activeCategory: EventEmitter<number> = new EventEmitter<number>()
  
  constructor(public categorySrvice: CategoryService){
    this.categories = categorySrvice.categories;
  }

  clickOnCategory(id: number) {
    this.activeCategory.emit(id);
  }

  addGategory(event: any){
    if((event.code == 'Enter' || event.key == 'Enter') && this.input.value != null && this.input.valid){
      this.categorySrvice.addCategory(this.input.value.trim())
      this.input.setValue(null);
    }
  }
}
