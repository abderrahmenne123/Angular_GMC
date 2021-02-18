import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {
@HostBinding('style.color') color: string | undefined;
@HostBinding('style.color') bc: string | undefined ;
generateRandomColor(): string {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
  constructor() { }
// tslint:disable-next-line:typedef
@HostListener('keyup') changeColor(){
this.bc = this.generateRandomColor();
this.color = this.generateRandomColor();
}
}
