import { Component } from '@angular/core';

@Component({
  selector: 'app-stepper-form',
  standalone: false,

  templateUrl: './stepper-form.component.html',
  styleUrl: './stepper-form.component.scss',
})
export class StepperFormComponent {
  steps = [1, 2, 3];
  currentStep = 0;
  selectedOptions: string[] = [];

  // Navigate to the next step
  nextStep(): void {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  // Navigate to the previous step
  prevStep(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  // Check if current step matches the step index
  isCurrentStep(stepIndex: number): boolean {
    return this.currentStep === stepIndex;
  }

  // Toggle selection for multi-select checkboxes
  toggleSelection(option: string): void {
    if (this.selectedOptions.includes(option)) {
      this.selectedOptions = this.selectedOptions.filter(
        (opt) => opt !== option
      );
    } else {
      this.selectedOptions.push(option);
    }
  }
}
