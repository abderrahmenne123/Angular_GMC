import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-carte-visite',
  templateUrl: './carte-visite.component.html',
  styleUrls: ['./carte-visite.component.css']
})
export class CarteVisiteComponent implements OnInit {
   cartForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cartForm = this.fb.group({
      nom: new FormControl(),
      prenom: new FormControl(),
      job: new FormControl(),
      citation: new FormControl(),
      travail: new FormControl(),
      cle: new FormControl(),
      img: new FormControl(),
    });
  }
  //const nom= this.cartForm.get("'nom'").value;
ajouter()
{

 console.log('données du formulaire...', this.cartForm.value);
 
}
}
