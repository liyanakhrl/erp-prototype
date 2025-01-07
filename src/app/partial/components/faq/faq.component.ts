import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: false,

  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {
  // Initialize an array of FAQs
  faqs = [
    {
      question: 'What’s the best thing about Switzerland?',
      answer:
        'I don’t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quas cupiditate laboriosam fugiat.',
      open: false,
    },
    {
      question: 'How do you make holy water?',
      answer:
        'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quas cupiditate laboriosam fugiat.',
      open: false,
    },
    {
      question: 'Why do you never see elephants hiding in trees?',
      answer:
        'Because they’re so good at it. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quas cupiditate laboriosam fugiat.',
      open: false,
    },
    {
      question: 'What do you call someone with no body and no nose?',
      answer:
        'Nobody knows. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quas cupiditate laboriosam fugiat.',
      open: false,
    },
    {
      question: "Why can't you hear a pterodactyl go to the bathroom?",
      answer:
        'Because the pee is silent. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quas cupiditate laboriosam fugiat.',
      open: false,
    },
    {
      question: 'Why did the invisible man turn down the job offer?',
      answer:
        'He couldn’t see himself doing it. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quas cupiditate laboriosam fugiat.',
      open: false,
    },
  ];

  // Toggle visibility of the answer based on index
  toggleAnswer(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
