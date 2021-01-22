import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit {
color = 'black';
  constructor() { }

  ngOnInit(): void {
  }

// tslint:disable-next-line:typedef
/*treatSonData(message)
{
  alert(message);
}*/
}
