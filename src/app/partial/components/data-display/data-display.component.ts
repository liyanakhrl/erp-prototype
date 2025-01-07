import { Component } from '@angular/core';

@Component({
  selector: 'app-data-display',
  standalone: false,

  templateUrl: './data-display.component.html',
  styleUrl: './data-display.component.scss',
})
export class DataDisplayComponent {
  applicant = {
    fullName: 'Margot Foster',
    applicationFor: 'Backend Developer',
    email: 'margotfoster@example.com',
    salaryExpectation: '$120,000',
    about:
      'Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat.',
    attachments: [
      { name: 'resume_back_end_developer.pdf', size: '2.4mb' },
      { name: 'coverletter_back_end_developer.pdf', size: '4.5mb' },
    ],
  };

  // Methods for handling update and remove actions
  updateAttachment(attachmentName: string) {
    console.log(`Update ${attachmentName}`);
  }

  removeAttachment(attachmentName: string) {
    console.log(`Remove ${attachmentName}`);
  }

  updateInfo(infoType: string) {
    console.log(`Update ${infoType}`);
  }
}
