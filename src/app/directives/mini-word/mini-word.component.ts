import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css']
})
export class MiniWordComponent implements OnInit {
color ='blue';
font='Verdana';
size=35;
  constructor() { }

  ngOnInit(): void {
  }

}
