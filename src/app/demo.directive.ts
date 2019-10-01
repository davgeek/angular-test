import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[colorea]'
})
export class DemoDirective implements OnInit{

  @Input('colorTexto') color: string;

  @Input('colorBG') colorBg: string;

  constructor(private element: ElementRef) {
    
  }

  ngOnInit() {
    console.log(this.color);
    this.element.nativeElement.style.color = this.color;
    this.element.nativeElement.style.backgroundColor = this.colorBg;
  }

}
