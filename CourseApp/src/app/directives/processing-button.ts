import { Directive, ElementRef, OnDestroy, Renderer2, inject, input } from '@angular/core';

@Directive({
  selector: '[appProcessingButton]',
  host: {
    '(click)': 'onClick()'
  }
})
export class ProcessingButton implements OnDestroy {
  readonly duration = input(3000);
  readonly processingText = input('Processing...');
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly renderer = inject(Renderer2);
  private timeoutId: ReturnType<typeof setTimeout> | null = null;
  private originalText = '';

  onClick(): void {
    const element = this.el.nativeElement;
    if (this.timeoutId !== null) {
      return;
    }

    this.originalText = element.innerText;
    this.renderer.setProperty(element, 'disabled', true);
    this.renderer.setProperty(element, 'innerText', this.processingText());

    this.timeoutId = setTimeout(() => {
      this.renderer.setProperty(element, 'disabled', false);
      this.renderer.setProperty(element, 'innerText', this.originalText);
      this.timeoutId = null;
    }, this.duration());
  }

  ngOnDestroy(): void {
    if (this.timeoutId !== null) {
      clearTimeout(this.timeoutId);
    }
  }
}
