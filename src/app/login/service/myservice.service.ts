import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  login:boolean=false;
  constructor(private routes: Router) { }
  checkusernameandpassword(uname:string,pwd:string)
  {
    if(uname=="divyanshu" && pwd=="password")
    {
      localStorage.setItem('username',"divyanshu");
      this.login=true;
      return true;
    }
    else
    {
      this.login=false;
      return false;
    }
  }
  logOut(){
    localStorage.removeItem('username');
    this.routes.navigate(['/login'])
  }
}
