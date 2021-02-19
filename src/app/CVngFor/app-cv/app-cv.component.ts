import { Component, OnInit } from '@angular/core';
import {Personne} from '../../model/Personne';

@Component({
  selector: 'app-app-cv',
  templateUrl: './app-cv.component.html',
  styleUrls: ['./app-cv.component.css']
})
export class AppCvComponent implements OnInit {
  personnes: Personne[] | undefined;
  selectedPersonne: Personne | undefined;
  constructor() { }

  ngOnInit(): void {

    this.personnes = [
      new Personne (3, 'gharbi', 'faten', 30, 13490128, 'ingénieurs', 'tim_logo.png'),
      new Personne (0, 'zorgati', 'abderrahmenne', 25, 12813470, 'ingénieur', 'aa.jpg'),
      new Personne (2, 'bellil', 'mony', 26, 12813499, 'ingénieurs', 'rotating_card_profile.png'),
    ];
  }
// tslint:disable-next-line:typedef
  selectPersonne(personne: any) {

    this.selectedPersonne = personne;

  }
}
