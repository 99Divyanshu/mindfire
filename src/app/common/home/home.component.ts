import { Component, OnInit,OnChanges, SimpleChanges } from '@angular/core';
import { LoginComponent } from 'src/app/login/component/login.component';
import { MyserviceService } from 'src/app/login/service/myservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[LoginComponent]
})
export class HomeComponent implements OnInit,OnChanges {

  y: string | undefined;

  constructor( private com:LoginComponent) { }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  x:string="my name is anthony gonsalwis!!";
  
  show():void
  {
    console.log(this.x);
    
  }
  head =[{'item1':'Home','item2':'Categories','item3':'More'}];
  head_rit =[{'title1':'Sign Up','title2':'LogIn'}];
  //public im="assets/logo.png";
  isDisplay:boolean=this.com.output;
  /*toggleDisplay()
  {
    this.isDisplay=!this.com.;
  }*/
 // value:boolean=false;
  text:string="";
  ngOnInit(): void
   {
    // console.log(this.com.output);
     if(this.com.output==true)
     {
      // console.log(this.com.output);
        this.isDisplay=this.com.output;
        this.text="Welcome Divyanshu!!";
     }
     else
     {
      console.log(this.com.output);

        this.isDisplay=false;
     }
     this.show();
  }
  

}

