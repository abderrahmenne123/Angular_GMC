import { Component, OnInit } from '@angular/core';
import {Personne} from '../../model/Personne';
import {EmbaucheService} from '../services/embauche.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {
embauchees: Personne[] | undefined ;
  constructor(
    private embaucheService: EmbaucheService
  ) { }

  ngOnInit(): void {
    this.embauchees = this.embaucheService.getEmbauchees();
  }

}
