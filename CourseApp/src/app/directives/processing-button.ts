import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appProcessingButton]',
})
export class ProcessingButton {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') 
  onClick() {
    this.renderer.setProperty(this.el.nativeElement, 'disabled', true);
    const originalText = this.el.nativeElement.innerText;
    this.renderer.setProperty(this.el.nativeElement, 'innerText', 'Processing...');
    setTimeout(() => {
      this.renderer.setProperty(this.el.nativeElement, 'disabled', false);
      this.renderer.setProperty(this.el.nativeElement, 'innerText', originalText);  
    }, 3000);     
  }
}