import { Injectable } from '@angular/core';
import {Personne} from '../../model/Personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
 private personnes: Personne[] | undefined;
  constructor() {
    this.personnes = [
      new Personne (2, 'gharbi', 'faten', 35, 987654321, 'information', 'tim_logo.png'),
      new Personne (3, 'zorgati', 'abderrahmenne', 25, 12813470, 'ingénieur informatique', 'aa.jpg'),
      new Personne (4, 'bellil', 'mony', 20, 120000, 'ingénieurs gestion', 'rotating_card_profile.png'),
    ];
  }
  getPersonnes(): Personne[] | undefined{
    return this.personnes;
  }
}
