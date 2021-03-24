import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoriesComponent} from './header_elements/categories/categories.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import {MoreComponent} from './header_elements/more/more.component';
import {RegisterComponent} from './sign_up/register/register.component';
import { AuthGuard } from './login/auth/auth.guard';
import { LoginComponent } from './login/component/login.component';


const routes: Routes = [
  {path:"login",component:LoginComponent },
  {path:'homepage',canActivate:[AuthGuard], component:HomepageComponent},
  {path: 'categories',canActivate:[AuthGuard],component:CategoriesComponent},
  {path: 'more',canActivate:[AuthGuard],component:MoreComponent},
  {path: 'register',component:RegisterComponent},
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomepageComponent,CategoriesComponent, MoreComponent,RegisterComponent]