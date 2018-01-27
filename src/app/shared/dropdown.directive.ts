import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') clicked() {
    // if (this.isOpen) {
    //   this.renderer.removeClass(this.el.nativeElement, 'open');
    // } else {
    //   this.renderer.addClass(this.el.nativeElement, 'open');
    // }
    this.isOpen = !this.isOpen;
  }
  constructor(private el: ElementRef, private renderer: Renderer2) {
  }
}
