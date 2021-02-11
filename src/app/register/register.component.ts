import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }
 
  form_el=[{'item1':'','item2':'','item3':'','item4':'','item5':'','item6':'','item7':'','item8':'','item9':'','item10':'','item11':''}]
 
  ngOnInit(): void {
  }
  signupUser(signupForm:NgForm)
  {
    alert(JSON.stringify(this.form_el,null,4));
  }
}
