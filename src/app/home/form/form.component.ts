import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  
  public isDisabled=true;
  public num="";
  
  constructor() { }

  onClick()
  {
    this.isDisabled=false;
     alert("Fields Will be Enabled!!");
     
  }

  ngOnInit(): void {
  }

}
