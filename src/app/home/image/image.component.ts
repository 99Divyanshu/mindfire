import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  public img_sr="assets/boot.png";
  constructor() { }

  ngOnInit(): void {
  }

}
