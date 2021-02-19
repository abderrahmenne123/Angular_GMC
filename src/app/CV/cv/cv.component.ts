import { Component, OnInit } from '@angular/core';
import {Personne} from '../../model/Personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  personnes: Personne[];
  selectedPersonne: Personne;
  constructor() { }

  ngOnInit(): void {
    this.personnes = [
      new Personne (3, 'gharbi', 'faten', 26, 13490128, 'ingénieurs', 'tim_logo.png'),
      new Personne (0, 'zorgati', 'abderrahmenne', 25, 12813470, 'ingénieur', 'aa.jpg'),
      new Personne (2, 'bellil', 'mony', 26, 12813499, 'ingénieurs', 'rotating_card_profile.png'),
    ];
  }


  // tslint:disable-next-line:typedef
  selectPersonne(personne) {
    //console.log(selectedPersonne);
    this.selectedPersonne = personne;

  }
}
