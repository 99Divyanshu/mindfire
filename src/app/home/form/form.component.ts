import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public isDisabled=true;
  constructor() { }

  onClick()
  {
     alert("Fields Will be Enabled!!");
     this.isDisabled=false;
  }
  ngOnInit(): void {
  }

}
