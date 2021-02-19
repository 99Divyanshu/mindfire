import { Component, OnInit } from '@angular/core';
import { CommonDTO } from '../common/types/commonDTO';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private my_data:HomeService){}
  public store:CommonDTO[]=[];
  ngOnInit():void
  {
    this.my_data.getMessage().subscribe(data=>this.store=data);
  }

}
