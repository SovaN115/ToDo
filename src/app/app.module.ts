import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskService } from './services/taskService';
import { CategoryComponent} from './components/category/category.component';
import { MainComponent } from './components/main/main.component';
import { CategoryService } from './services/categoryService';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    TasksComponent,
    CategoryComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [TaskService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
