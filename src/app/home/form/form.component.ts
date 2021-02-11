import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  
  public isDisabled=true;
  public num="";
  
  constructor(
    public first:string,
    public last:string,
    public email:string,
    public phone:number,
    public state:string,
    public gender:string
  ) { }
  user=new FormComponent('Divyanshu','Kothari','afhfh@sgfd.com',9876543210,'','Male')
  onClick()
  {
    this.isDisabled=false;
     alert("Fields Will be Enabled!!");
     
  }
  form_ele=[{'ele1':'Divyanshu','ele2':'Kothari','ele3':'absa@adas.com','ele4':'9876543210'}]
  ngOnInit(): void
   {
    
  }

}
