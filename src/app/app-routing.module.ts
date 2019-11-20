import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'mainCategory', component: CategoryComponent },
  { path: 'subCategory', component: SubCategoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }