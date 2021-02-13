import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-exp',
  templateUrl: './ng-class-exp.component.html',
  styleUrls: ['./ng-class-exp.component.css']
})
export class NgClassExpComponent implements OnInit {
  isAllume = false;
  constructor() { }

  ngOnInit(): void {
  }
showHide(){
    this.isAllume = ! this.isAllume;
}
}
