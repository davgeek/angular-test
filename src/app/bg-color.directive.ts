import { Directive, ElementRef, Input, OnChanges, OnInit, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[BgColor]',
})
export class BgColorDirective {

  @Input() color: string = ''

  constructor(elementRef: ElementRef) {
    elementRef.nativeElement.style.backgroundColor = 'red';
  }

}
