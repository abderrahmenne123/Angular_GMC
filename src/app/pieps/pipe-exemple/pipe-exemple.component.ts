import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-exemple',
  templateUrl: './pipe-exemple.component.html',
  styleUrls: ['./pipe-exemple.component.css']
})
export class PipeExempleComponent implements OnInit {
name = 'abderrahmenne zorgati';
mydate = Date.now();
  constructor() { }

  ngOnInit(): void {
  }

}
