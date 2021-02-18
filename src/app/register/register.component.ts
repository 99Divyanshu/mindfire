import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }
 
  

  ngOnInit(): void {
  }
  /*clear()
  {
    this.form_el.reset({});
  }*/
  form_el=[{'item1':'','item2':'','item3':'','item4':'','item5':'','item6':'','item7':'','item8':'','item9':'','item10':'','item11':''}]
  
  stateList: Array<any> = [
    { name: 'Uttar Pradesh', cities: ['Noida', 'Kanpur', 'Varanasi'] },
    { name: 'Rajasthan', cities: ['Jaipur','Kota','Udaipur'] },
    { name: 'Himachal Pradesh', cities: ['Shimla','Manali','Dalhousie'] },
    { name: 'Haryana', cities: ['Gurugram','Rohtak','Chandigarh'] },
  ];
  cities: Array<any> | undefined;
 
  signupUser(signupForm:NgForm)
  {
    alert(JSON.stringify(this.form_el));
  }
}
