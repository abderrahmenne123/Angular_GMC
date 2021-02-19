import { Component, OnInit } from '@angular/core';
import {Personne} from '../../model/Personne';
import {LoggerService} from '../../services/logger.service';
import {FirstServiceService} from '../../services/first-service.service';
import {CvService} from '../services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  personnes: Personne[] |undefined;
  selectedPersonne: Personne |undefined;

  constructor(
   private cvService: CvService
  ) { }

  ngOnInit(): void {

this.personnes = this.cvService.getPersonnes();
  }


  // tslint:disable-next-line:typedef
  selectPersonne(personne: Personne | undefined) {

    this.selectedPersonne = personne;


  }
}
