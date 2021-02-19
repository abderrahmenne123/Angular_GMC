import { Component, OnInit } from '@angular/core';
import {Personne} from '../../model/Personne';
import {LoggerService} from '../../services/logger.service';
import {FirstServiceService} from '../../services/first-service.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  personnes: Personne[] |undefined;
  selectedPersonne: Personne |undefined;

  constructor(
   private loggerService: LoggerService ,
   private firstService: FirstServiceService
  ) { }

  ngOnInit(): void {
    this.loggerService.logger('salut CV ');
    this.firstService.logger();
    this.personnes = [
      new Personne (3, 'gharbi', 'faten', 26, 13490128, 'ingénieurs', 'tim_logo.png'),
      new Personne (0, 'zorgati', 'abderrahmenne', 25, 12813470, 'ingénieur', 'aa.jpg'),
      new Personne (2, 'bellil', 'mony', 26, 12813499, 'ingénieurs', 'rotating_card_profile.png'),
    ];
  }


  // tslint:disable-next-line:typedef
  selectPersonne(personne) {

    this.selectedPersonne = personne;
    this.loggerService.info('je viens de selectionner');

  }
}
