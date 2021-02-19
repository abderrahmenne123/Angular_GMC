import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from '../../model/Personne';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})
export class AppListComponent implements OnInit {
  @Input() personnes: Personne[] | undefined;
  @Output() selectedPersonne = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  selectPersonne(){
    this.selectedPersonne.emit(this.personnes);

  }
}
