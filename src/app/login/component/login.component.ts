import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[MyserviceService]
})
export class LoginComponent implements OnInit {

  constructor(private service:MyserviceService,private routes:Router ) { }
  msg:string="";
  ngOnInit(): void {
  }
  output:boolean=false;
  check(uname:string,p:string)
  {
    this.output=this.service.checkusernameandpassword(uname,p);
    if(this.output==true)
    {
      this.routes.navigate(['/homepage']);
     
    }
    else
    {
      this.msg="Invalid username or password!!";
    }
  }

}
