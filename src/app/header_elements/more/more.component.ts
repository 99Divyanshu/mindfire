import { Component, OnInit } from '@angular/core';
import { MoreDTO } from '../../common/types/moreDTO';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})
export class MoreComponent implements OnInit {

  constructor( private more_service:HomeService) { }
  public ar:MoreDTO[]=[];
  ngOnInit(): void {

    this.more_service.getData().subscribe(data=>this.ar=data);
  }

}
