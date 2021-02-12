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
  //stat=[{'st1':'Himachal Pradesh','st2':'Haryana','st3':'Uttarakhand','st4':'Uttar Pradesh','st5':'Rajasthan'}]
  ngOnInit(): void {
  }
  clear()
  {
    this.form_el=[{'item1':'','item2':'','item3':'','item4':'','item5':'','item6':'','item7':'','item8':'','item9':'','item10':'','item11':''}]
  }
  signupUser(signupForm:NgForm)
  {
    alert(JSON.stringify(this.form_el));
  }
}
