import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor-example',
  templateUrl: './ngfor-example.component.html',
  styleUrls: ['./ngfor-example.component.css']
})
export class NgforExampleComponent implements OnInit {
names=[
  'aymen','zorgati','abderrahmenne','rym','aicha'
];
  constructor() { }

  ngOnInit(): void {
  }

}
