import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  currentStep: number = 1;

  onNextStep() {
    this.currentStep++;
  }
  onPreviousStep() {
    this.currentStep--;
  }
  onSubmit() {
    if (this.currentStep > 5) return;
    this.currentStep++;
  }
}
