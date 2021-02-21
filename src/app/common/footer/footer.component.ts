import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() public parentData:any;
  @Output() public childEvent =new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }
  fireEvent()
  {
    this.childEvent.emit('Hey Divyanshu!!');
  }

}
