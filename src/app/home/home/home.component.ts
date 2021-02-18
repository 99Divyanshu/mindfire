import { Component, OnInit,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnChanges {

  y: string | undefined;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  x:string="my name is anthony gonsalwis!!";
  
  show():void
  {
    console.log(this.x);
    this.y="amar akbar anthony";
    alert(this.y);
  }
  head =[{'item1':'Home','item2':'Categories','item3':'More'}];
  head_rit =[{'title1':'Sign Up','title2':'LogIn'}];
  //public im="assets/logo.png";
  isDisplay=true;
  toggleDisplay()
  {
    this.isDisplay=!this.isDisplay;
  }
  ngOnInit(): void
   {
    alert("Page Loaded!!");
    
    this.show();
  }
  

}

