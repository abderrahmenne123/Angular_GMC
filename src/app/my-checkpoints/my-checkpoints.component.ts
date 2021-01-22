import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-checkpoints',
  templateUrl: './my-checkpoints.component.html',
  styleUrls: ['./my-checkpoints.component.css']
})
export class MyCheckpointsComponent implements OnInit {
  color ='[blue,green,orange,yellow,black,grey,pink]';
 
  constructor() { }

  ngOnInit(): void {
  }
  changeName() {
    //console.log(newName);
    this.color="";
  }
}
