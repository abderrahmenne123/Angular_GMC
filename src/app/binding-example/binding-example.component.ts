import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-example',
  templateUrl: './binding-example.component.html',
  styleUrls: ['./binding-example.component.css']
})
export class BindingExampleComponent implements OnInit {
name='abderrahmenne zorgati';
age=37;
adresse='sousse';
  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
 
}
