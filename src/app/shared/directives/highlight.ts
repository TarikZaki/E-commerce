import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {
  private readonly el = inject(ElementRef);
  private readonly renderer = inject(Renderer2);

  @HostListener('mouseenter')
  mouseEnter(): void {
    this.addStyle('yellow');
  }

  @HostListener('mouseleave')
  mouseLeave(): void {
    this.addStyle('');
  }

  addStyle(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  } 
}
