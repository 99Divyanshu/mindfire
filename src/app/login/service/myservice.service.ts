import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }
  checkusernameandpassword(uname:string,pwd:string)
  {
    if(uname=="divyanshu" && pwd=="password")
    {
      localStorage.setItem('username',"divyanshu");
      return true;
    }
    else
    {
      return false;
    }
  }
}
