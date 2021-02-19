import {Component, Input, OnInit} from '@angular/core';
import {Personne} from '../../model/Personne';
import {EmbaucheService} from '../services/embauche.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
@Input() personne: Personne | undefined;

  constructor(
    private embaucheService: EmbaucheService
  ) { }

  ngOnInit(): void {
  }


  // tslint:disable-next-line:typedef
  embaucher() {

    // @ts-ignore
    this.embaucheService.embaucher(this.personne);

  }
}
