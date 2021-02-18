import { Component } from '@angular/core';
import { HomeService } from './home/home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mindfire';

  constructor(private api:HomeService){}

  ngOnInit()
  {
    this.api.getMessage().subscribe((data)=>{
      alert(JSON.stringify(data,null,4));
    })
  }

}

