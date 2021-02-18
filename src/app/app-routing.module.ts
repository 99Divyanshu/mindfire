import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoriesComponent} from './categories/categories.component';
import { HomepageComponent } from './homepage/homepage.component';
import {MoreComponent} from './more/more.component';
import {RegisterComponent} from './register/register.component';
const routes: Routes = [
  {path:'homepage',component:HomepageComponent},
  {path: 'categories',component:CategoriesComponent},
  {path: 'more',component:MoreComponent},
  {path: 'register',component:RegisterComponent},
  { path: '**', redirectTo: 'homepage' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomepageComponent,CategoriesComponent, MoreComponent,RegisterComponent]