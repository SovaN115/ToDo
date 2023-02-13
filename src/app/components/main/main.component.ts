import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  activeCategory: number | null = null;

  onCategoryClick(event: any){
    this.activeCategory = event;
  }
}
