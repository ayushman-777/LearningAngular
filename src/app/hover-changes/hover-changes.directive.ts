import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[hover]'
})
export class HoverChangesDirective implements OnInit{
  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }
}
