import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
 // parentColor="blue";
  @Input()  dataParent: string | undefined;
  @Input() parentColor: any ;
  @Output() sendDataFromSon = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    /*
    * céer un evenements
    * emettre l'evenment en y injectant des données
    * OutPut
    *  */

  }
  changeColor() {
    //console.log(newName);
    this.parentColor="blue";
  }
 /* sendDataToFather(){
    this.sendDataFromSon.emit('Hello je suis ton fils');
  }*/
}
