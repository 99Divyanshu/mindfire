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
  ngOnInit(): void
   {
    alert("Page Loaded!!");
    
    this.show();
  }
  

}

