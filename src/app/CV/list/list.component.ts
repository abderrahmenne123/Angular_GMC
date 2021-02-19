import {Component, Input,EventEmitter, OnInit, Output} from '@angular/core';
import {Personne} from '../../model/Personne';




@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
@Input() personnes: Personne[] |undefined;
@Output() selectedPersonne = new EventEmitter();
// personne: Personne;
  constructor() { }

  ngOnInit(): void {

  }
  selectPersonne(){
    this.selectedPersonne.emit(this.personnes);

  }

}
