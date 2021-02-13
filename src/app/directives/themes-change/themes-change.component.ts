import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-themes-change',
  templateUrl: './themes-change.component.html',
  styleUrls: ['./themes-change.component.css']
})
export class ThemesChangeComponent implements OnInit {
theme='';
  constructor() { }

  ngOnInit(): void {
  }

  changeTheme(theme: string) {
    this.theme = theme;

  }
}
