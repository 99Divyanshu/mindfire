import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor( private http : HttpClient) { }
 
  

  ngOnInit(): void {
  }
  /*clear()
  {
    this.form_el.reset({});
  }*/
  form_el=[{'item1':'','item2':'','item3':'','item4':'','item5':'','item6':'','item7':'','item8':'Himachal Pradesh','item9':'','item10':'','item11':''}]
  
  stateList: Array<any> = [
    { name: 'Uttar Pradesh', cities: ['Noida', 'Kanpur', 'Varanasi'] },
    { name: 'Rajasthan', cities: ['Jaipur','Kota','Udaipur'] },
    { name: 'Himachal Pradesh', cities: ['Shimla','Manali','Dalhousie'] },
    { name: 'Haryana', cities: ['Gurugram','Rohtak','Chandigarh'] },
  ];
  //cities: Array<any> | undefined;
 cities=[{'city':'Varansi'},{'city':'Noida'},{'city':'Delhi'},{'city':'Manali'},{'city':'Mumbai'}]
  changeState(count:string)
  {
    this.cities=this.stateList.find(con=>con.name==count).cities;
  }

  signupUser(data:any)
  {
    
    let url="http://httpbin.org/post";
    this.http.post(url,data).subscribe((result)=>{console.warn("result",result)
  })
//    alert(JSON.stringify(this.form_el));
  }
}
