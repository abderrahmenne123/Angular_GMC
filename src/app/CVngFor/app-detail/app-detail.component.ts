import {Component, Input, OnInit} from '@angular/core';
import {Personne} from '../../model/Personne';

@Component({
  selector: 'app-app-detail',
  templateUrl: './app-detail.component.html',
  styleUrls: ['./app-detail.component.css']
})
export class AppDetailComponent implements OnInit {
  @Input() personne: Personne | undefined ;
  constructor() { }

  ngOnInit(): void {
  }

}
