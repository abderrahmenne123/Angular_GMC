import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlightt]'
})
export class HighlighttDirective {

  @HostBinding('style.backgroundColor') bg = 'red';

  constructor() {
  }

  @HostListener('mouseenter') entre() {
    this.bg = 'yellow';

  }
}
