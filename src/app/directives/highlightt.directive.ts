import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlightt]'
})
export class HighlighttDirective {
  @Input() out ='yellow';
  @Input() int ='red';

  @HostBinding('style.backgroundColor') bg = this.out;

  constructor() {
  }

  @HostListener('mouseenter') entre() {
    this.bg = this.in;

  }
  @HostListener('mouseleave') leave(){
    this.bg=this.out;
  }
}
