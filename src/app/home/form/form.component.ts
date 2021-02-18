import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  
  public isDisabled=true;
  public num="";
  
  constructor(private http:HttpClient) { }
 // user=new FormComponent('Divyanshu','Kothari','afhfh@sgfd.com',9876543210,'','Male')
  onClick()
  {
    this.isDisabled=false;
     alert("Fields Will be Enabled!!");
     
  }
  form_ele=[{'ele1':'Divyanshu','ele2':'Kothari','ele3':'absa@adas.com','ele4':'9876543210','ele5':'','ele6':''}]
  state=[{'st1':'Himachal Pradesh','st2':'Haryana','st3':'Uttarakhand','st4':'Uttar Pradesh','st5':'Rajasthan'}]
  gender=[{'gen1':'Male','gen2':'Female'}]
  ngOnInit(): void
   {
    
  }
  onPost(data:any)
  {
    let url="http://httpbin.org/post";
    this.http.post(url,data).subscribe((result)=>{console.warn("result",result)
  })
  }

}
