import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoriesComponent} from '../header_elements/categories/categories.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import {MoreComponent} from '../header_elements/more/more.component';
import {RegisterComponent} from './sign_up/register/register.component';
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