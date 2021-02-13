import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-style-exemple',
  templateUrl: './ng-style-exemple.component.html',
  styleUrls: ['./ng-style-exemple.component.css']
})
export class NgStyleExempleComponent implements OnInit {
@Input() color='lightblue';
  @Input()  bgc='green';
  @Input()  font='Verdana';
  constructor() { }

  ngOnInit(): void {
  }

}
