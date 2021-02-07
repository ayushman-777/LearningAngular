import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[better-hover]'
})
export class BetterHoverChangesDirective implements OnInit{
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  @Input() defaultColor = 'transparent';
  @Input() highlightColor: string;
  @HostBinding('style.backgroundColor') backgroundColor: string;

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseEnter(eventData: Event): void {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'green');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event): void {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
