import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ProcessingButton } from './processing-button';

@Component({
  selector: 'app-test',
  template: '<button appProcessingButton>Click me</button>',
  imports: [ProcessingButton],
  standalone: true
})
class TestComponent {}

describe('ProcessingButton', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let buttonEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    buttonEl = fixture.debugElement.query(By.css('button'));
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should disable button on click', () => {
    buttonEl.nativeElement.click();
    fixture.detectChanges();
    expect(buttonEl.nativeElement.disabled).toBe(true);
  });

  it('should change text to "Processing..." on click', () => {
    buttonEl.nativeElement.click();
    fixture.detectChanges();
    expect(buttonEl.nativeElement.innerText).toBe('Processing...');
  });

  it('should restore button after 3 seconds', async () => {
    const originalText = buttonEl.nativeElement.innerText;
    buttonEl.nativeElement.click();
    fixture.detectChanges();
    
    await new Promise(resolve => setTimeout(resolve, 3100));
    fixture.detectChanges();
    
    expect(buttonEl.nativeElement.disabled).toBe(false);
    expect(buttonEl.nativeElement.innerText).toBe(originalText);
  });
});
