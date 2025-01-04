import { Component } from '@angular/core';

@Component({
  selector: 'app-masonry',
  standalone: false,

  templateUrl: './masonry.component.html',
  styleUrl: './masonry.component.scss',
})
export class MasonryComponent {
  cards = [
    {
      title: 'CUSTOMER & COMMUNITY OBSESSED (FRIENDLY & HELPFUL)',
      receiver: 'Rahman',
      message:
        'Thank you for your hard work during the network migration at Worq Bangsar.',
      sender: 'Amiza',
    },
    {
      title: 'CUSTOMER & COMMUNITY OBSESSED (FRIENDLY & HELPFUL)',
      receiver: 'Rahman',
      message:
        "Hey Rahman, thank you so much for assisting the community team with our event sound system and going beyond to help ensure the sound system is working well during events. On a personal note, you have also been helpful to troubleshoot my laptop whenever I'm unable to solve it on my own.",
      sender: 'Cam',
    },
    {
      title: 'ACCOUNTABILITY & OWNERSHIP (OWNERSHIP & RESPECT)',
      receiver: 'Michelle',
      message:
        'Michelle, thank you for consistently showcasing your incredible skills and dedication! Your presence at the space brings such a sense of confidence and reliability that we never have to worry about anything.',
      sender: 'Tharsha',
    },
    {
      title: 'CUSTOMER & COMMUNITY OBSESSED (FRIENDLY & HELPFUL)',
      receiver: 'William',
      message:
        'Thanks for all the effort you’ve been putting in. It really shows! You’re doing an awesome job, so keep it up. You’ve got this!',
      sender: 'Michelle',
    },
    {
      title: 'MINDSET (AGILE & SCALABLE)',
      receiver: 'Zamrina',
      message:
        'Zam, I am very happy that you joined Worq. I have a new Worq bestie. Keep up with your current enthusiasm to learn everything. I am very proud of you!',
      sender: 'Hafizah',
    },
    {
      title: 'INNOVATION & CREATIVITY (NEW IDEAS & SOLUTIONS)',
      receiver: 'Aiman',
      message:
        'Your innovative ideas for improving our workspace design have truly transformed the environment. Thank you for inspiring creativity!',
      sender: 'Farah',
    },
    {
      title: 'TEAMWORK & COLLABORATION (WORKING TOGETHER)',
      receiver: 'Adam',
      message:
        'Thank you for always stepping up to assist the team during tight deadlines. Your willingness to collaborate has made a huge difference!',
      sender: 'Nina',
    },
    {
      title: 'RESILIENCE & PERSEVERANCE (OVERCOMING CHALLENGES)',
      receiver: 'Faris',
      message:
        'Your ability to push through challenges and maintain a positive attitude inspires everyone around you. Thank you for being so strong.',
      sender: 'Zana',
    },
    {
      title: 'OWNERSHIP & RESPONSIBILITY (TAKING INITIATIVE)',
      receiver: 'Sarah',
      message:
        'Your proactive approach to solving issues has set a great example for everyone. Thank you for taking ownership and ensuring success.',
      sender: 'Daniel',
    },
    {
      title: 'EMPATHY & CARE (SUPPORTING EACH OTHER)',
      receiver: 'Izzah',
      message:
        'Your kindness and support during difficult times have meant so much to me. Thank you for being such a caring friend and colleague.',
      sender: 'Alia',
    },
    {
      title: 'EFFICIENCY & EFFECTIVENESS (GETTING RESULTS)',
      receiver: 'Hakim',
      message:
        'Thank you for streamlining our processes and making sure everything runs smoothly. Your dedication to efficiency has saved us so much time!',
      sender: 'Zara',
    },
    {
      title: 'GROWTH & LEARNING (PERSONAL DEVELOPMENT)',
      receiver: 'Amira',
      message:
        'Your eagerness to learn and improve is truly inspiring. Thank you for showing us what growth looks like in action!',
      sender: 'Nabil',
    },
    {
      title: 'ACCOUNTABILITY AND OWNERSHIP',
      receiver: 'Aqilah',
      message:
        'You are always eager to help others and innovate something in order to make work process easier for us. Thanks a lot!',
      sender: 'Liza',
    },
    {
      title: 'ACCOUNTABILITY AND OWNERSHIP',
      receiver: 'Suzi',
      message:
        'Never failed to impressed and motivated everyone to stay energetic. Keep up!',
      sender: 'Rozie',
    },
    {
      title: 'ACCOUNTABILITY AND OWNERSHIP',
      receiver: 'Suzi',
      message:
        'Never failed to impressed and motivated everyone to stay energetic. Keep up!',
      sender: 'Rozie',
    },
    {
      title: 'ACCOUNTABILITY AND OWNERSHIP',
      receiver: 'Holmes',
      message:
        'Will definitely miss you babe! Keep in touch. Dream high!',
      sender: 'June',
    },
  ];
}
