import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-paragraph',
  templateUrl: './show-paragraph.component.html',
  styleUrls: ['./show-paragraph.component.css']
})
export class ShowParagraphComponent implements OnInit {
  isShow = true;
  constructor() { }

  ngOnInit(): void {
  }
  showHide(){
    this.isShow = ! this.isShow;
  }
}
