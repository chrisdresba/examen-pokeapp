import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appImgDefault]',
})
export class DefaultImageDirective {
  @Input() appImgDefault: string | undefined;

  constructor(private el: ElementRef) {}

  @HostListener('error') onError() {
    const element: HTMLImageElement = this.el.nativeElement;
    element.src = this.appImgDefault || 'assets/icon/poke-default.png'; // Imagen por defecto
  }
}
