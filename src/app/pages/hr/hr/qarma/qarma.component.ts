import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-qarma',
  standalone: false,
  templateUrl: `./qarma.component.html`,
  styleUrl: './qarma.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QarmaComponent {
  recognitionForm: FormGroup;  // Declare FormGroup for reactive form
  isRecognitionModalVisible: boolean = false;  // Flag for modal visibility
  isRecognitionNotesVisible: boolean = false;  // Flag for notes panel visibility
  recognitionNotes: string = "Outstanding performance in leadership and teamwork!";  // Example notes

  constructor() {
    // Initialize the form with controls
    this.recognitionForm = new FormGroup({
      selectedPerson: new FormControl('john'),
      selectedDepartment: new FormControl('hr'),
      recognitionNotes: new FormControl(''),
      selectedAttribute: new FormControl('leadership')
    });
  }

  // Show the recognition notes panel
  showRecognitionNotesPanel() {
    this.isRecognitionNotesVisible = true;
  }

  // Close the recognition notes panel
  closeRecognitionNotesPanel() {
    this.isRecognitionNotesVisible = false;
  }

  // Show the recognition modal
  showRecognitionModal() {
    this.isRecognitionModalVisible = true;
  }

  // Close the recognition modal
  closeRecognitionModal() {
    this.isRecognitionModalVisible = false;
  }

  // Handle form submission
  submitRecognition() {
    console.log('Form Submitted', this.recognitionForm.value);
    this.closeRecognitionModal();  // Close modal after submission
  }
}
