import { Component } from '@angular/core';

@Component({
  selector: 'app-hierachical-chart',
  standalone: false,

  templateUrl: './hierachical-chart.component.html',
  styleUrl: './hierachical-chart.component.scss',
})
export class HierachicalChartComponent {
  founder = {
    name: 'Stephanie Ping',
    role: 'Founder',
    image:
      'https://storage.googleapis.com/hr_internal/asset/Staff%20Photos/MANAGEMENT/Stephanie%20-%20Founder%20_%20CEO.png',
  };

  cofounder = {
    name: 'Andrew Yeow',
    role: 'Co-Founder',
    image:
      'https://storage.googleapis.com/hr_internal/asset/Staff%20Photos/MANAGEMENT/Andrew%20-%20Founder%20_%20CFO.png',
  };

  bods = [
    {
      name: 'Majorie Hon',
      role: 'Head of Outlet',
      image:
        'https://storage.googleapis.com/hr_internal/asset/Staff%20Photos/OPS%20-%20SPM/Majorie%20-%20Assistant%20Head%20of%20Outlets.png',
    },
    {
      name: 'Afdhal Shabli',
      role: 'Head of Operation',
      image:
        'https://storage.googleapis.com/hr_internal/asset/Staff%20Photos/TECH/Afdhal%20-%20Head%20of%20Outlets.png',
    },
    {
      name: 'Chea Wong',
      role: 'Head of Real Estates and Product Development',
      image:
        'https://storage.googleapis.com/hr_internal/asset/Staff%20Photos/SALES/Chea%20Hao%20-%20Head%20of%20Real%20Estate%20and%20Product%20Development.png',
    },
    {
      name: 'Nicholas Yap',
      role: 'Head of Finance and Human Resource',
      image:
        'https://storage.googleapis.com/hr_internal/asset/Staff%20Photos/HR/Nicholas%20-%20Head%20of%20HR%20_%20Finance.png',
    },
    {
      name: 'Abdul Harith ',
      role: 'Senior Integrated Facility Executive',
      image:
        'https://storage.googleapis.com/hr_internal/asset/Staff%20Photos/OPS%20-%20HQ/Harith%20-%20Senior%20Integrated%20Facility%20Executive.png',
    },
  ];

  departments = [
    {
      name: 'Finance Department',
      manager: {
        name: 'Jannah Razali',
        role: 'Finance Manager',
        image:
          'https://storage.googleapis.com/hr_internal/asset/Staff%20Photos/FINANCE/Jannah%20-%20Assistant%20Finance%20Manager.png',
      },
      executives: [
        {
          name: 'Nur Izzazy',
          image:
            'https://storage.googleapis.com/hr_internal/asset/Staff%20Photos/FINANCE/Izzazy%20-%20Finance%20Executive%20(AR).png',
          role: 'Account Receivable',
        },
        {
          name: 'Sasikala Apparao',
          image:
            'https://storage.googleapis.com/hr_internal/asset/Staff%20Photos/FINANCE/Sasikala%20-%20Senior%20Purchasing%20Executive.png',
          role: 'Sales and Purchasing',
        },
        {
          name: 'Izzati Ismail',
          image:
            'https://storage.googleapis.com/hr_internal/asset/Staff%20Photos/HR/Izzati%20-%20HR%20Intern.png',
          role: 'Executive Assistant cum Finance Admin',
        },
      ],
      nonExecutives: [],
    },
    {
      name: 'HR Department',
      manager: {
        name: 'Johnson Lee',
        role: 'HR Specialist',
        image:
          'https://storage.googleapis.com/hr_internal/asset/Staff%20Photos/HR/Johnson%20-%20People%20Development%20%26%20Engagement%20Specialist.png',
      },
      executives: [
        {
          name: 'Ruhaya Kassim',
          image:
            'https://storage.googleapis.com/hr_internal/asset/Staff%20Photos/HR/Ruhaya%20-%20HR%20Generalist.png',
          role: 'HR Generalist',
        },
        {
          name: 'Nurasyiqin Ibrahim',
          image:
            'https://storage.googleapis.com/hr_internal/asset/Staff%20Photos/HR/Iqynn%20-%20Junior%20HR%20Executive.png',
          role: 'Sr. Human Resource Executive',
        },
      ],
      nonExecutives: [
        {
          name: 'Izzat Ezzuddin',
          image:
            'https://storage.googleapis.com/hr_internal/asset/Staff%20Photos/HR/Izzat%20-%20HR%20Intern.png',
          role: 'Intern',
        },
      ],
    },
    {
      name: 'Technology Department',
      manager: {
        name: 'Afdhal Shabli',
        role: 'Manager',
        image:
          'https://storage.googleapis.com/hr_internal/asset/Staff%20Photos/TECH/Afdhal%20-%20Head%20of%20Outlets.png',
      },
      executives: [
        {
          name: 'Weei Chong Yap',
          image:
            'https://storage.googleapis.com/hr_internal/asset/Staff%20Photos/TECH/Weei%20Choong%20-%20Data%20Analyst.png',
          role: 'Data Analyst',
        },
        {
          name: 'Liyana Khairul',
          image:
            'https://storage.googleapis.com/hr_internal/asset/Staff%20Photos/TECH/Nur%20Liyana%20-%20Software%20Engineer.png',
          role: 'Software Engineer',
        },
        {
          name: 'Muhammad Syamil',
          image:
            'https://storage.googleapis.com/hr_internal/asset/Staff%20Photos/TECH/Syamil%20-%20Network%20Engineer.png',
          role: 'Network Engineer',
        },
        {
          name: 'Fitri Hazim',
          image:
            'https://storage.googleapis.com/hr_internal/asset/Staff%20Photos/TECH/Fitri%20Hazim%20-%20Network%20Engineer.png',
          role: 'Helpdesk Engineer',
        },
      ],
      nonExecutives: [
        {
          name: 'Razin Nazaruddin',
          image:
            'https://storage.googleapis.com/hr_internal/asset/Staff%20Photos/TECH/Razin%20-%20IT%20Intern.png',
          role: 'Intern',
        },
        {
          name: 'Alnijam Asari',
          image:
            'https://storage.googleapis.com/hr_internal/asset/Staff%20Photos/TECH/Alnijam%20-%20IT%20Intern.png',
          role: 'Intern',
        },
        {
          name: 'Dayang Nazihah',
          image:
            'https://storage.googleapis.com/hr_internal/asset/Staff%20Photos/TECH/Dayang%20Nazihah%20-%20IT%20Intern.png',
          role: 'Intern',
        },
      ],
    },
    {
      name: 'Operation Department',
      manager: {
        name: 'Majorie Hon',
        role: 'Manager',
        image:
          'https://storage.googleapis.com/hr_internal/asset/Staff%20Photos/OPS%20-%20SPM/Majorie%20-%20Assistant%20Head%20of%20Outlets.png',
      },
      executives: [
        {
          name: 'Wanme Kau',
          image:
            'https://storage.googleapis.com/hr_internal/asset/Staff%20Photos/OPS%20-%20KLS/Wanme%20-%20Outlet%20Manager.png',
          role: 'Outlet Manager (KL Region 1)',
        },
        {
          name: 'Tharshana Chandran',
          image:
            'https://storage.googleapis.com/hr_internal/asset/Staff%20Photos/OPS%20-%20KLG/Tharsha%20-%20Outlet%20Manager.png',
          role: 'Outlet Manager (KL Region 2)',
        },
        {
          name: 'Ken Lim',
          image:
            'https://storage.googleapis.com/hr_internal/asset/Staff%20Photos/OPS%20-%20SPM/Ken%20Lim%20-%20Outlet%20Manager.png',
          role: 'Outlet Manager (KL Region 3)',
        },
      ],
      nonExecutives: [
        {
          name: 'Amer Arshad',
          image:
            'https://storage.googleapis.com/hr_internal/asset/Staff%20Photos/OPS%20-%20KLS/Riko%20-%20Senior%20Front%20Desk.png',
          role: 'Assistant Outlet Manager',
        },
        {
          name: 'Nurul Idayu',
          image:
            'https://storage.googleapis.com/hr_internal/asset/Staff%20Photos/OPS%20-%20KLS/Nurulidayu%20-%20Senior%20Front%20Desk.png',
          role: 'Senior Front Desk',
        },
        {
          name: 'Afrina Batrisyia',
          image:
            'https://storage.googleapis.com/hr_internal/asset/Staff%20Photos/OPS%20-%20KLS/Betty%20-%20Front%20Desk.png',
          role: 'Senior Front Desk',
        },
        {
          name: 'Nur Farah Nadira',
          image:
            'https://storage.googleapis.com/hr_internal/asset/Staff%20Photos/OPS%20-%20MUB/Rara%20-%20Front%20Desk.png',
          role: 'Senior Front Desk',
        },
        {
          name: 'Michelle Tan',
          image:
            'https://storage.googleapis.com/hr_internal/asset/Staff%20Photos/OPS%20-%20MUB/Michelle%20-%20Front%20Desk.png',
          role: 'Senior Front Desk',
        },
        {
          name: 'Lavaneswary',
          image:
            'https://storage.googleapis.com/hr_internal/asset/Staff%20Photos/OPS%20-%20TTDI/Lavaness%20-%20Senior%20Front%20Desk.png',
          role: 'Assitant Outlet Manager',
        },
        {
          name: 'Izyan Liyana',
          image:
            'https://storage.googleapis.com/hr_internal/asset/Staff%20Photos/OPS%20-%20TTDI/Izyan%20-%20Front%20Desk.png',
          role: 'Front Desk',
        },
        {
          name: 'Shahrul Ameerul',
          image:
            'https://storage.googleapis.com/hr_internal/asset/Staff%20Photos/OPS%20-%20TTDI/Shahrul%20Ameerul%20-%20Front%20Desk.png',
          role: 'Senior Front Desk',
        },
      ],
    },
    
    {
      name: 'Sales Department',
      manager: {
        name: 'Sky Chin',
        role: 'Senior Enterprise Sales Manager',
        image:
          'https://storage.googleapis.com/hr_internal/asset/Staff%20Photos/SALES/Sky%20Chin%20-%20Senior%20Enterprise%20Sales%20Manager.png',
      },
      executives: [
        {
          name: 'Marcus Wong',
          image:
            'https://storage.googleapis.com/hr_internal/asset/Staff%20Photos/SALES/Marcus%20Wong%20-%20Senior%20Sales%20Executive.png',
          role: 'Senior Sales Executive',
        },
        {
          name: 'Viknays Rajasuran',
          image:
            'https://storage.googleapis.com/hr_internal/asset/Staff%20Photos/SALES/Vicky-%20Senior%20Sales%20Executive.png',
          role: 'Sr. Sales Executive',
        },
        {
          name: 'Zulaikha Zulkifli',
          image:
            'https://storage.googleapis.com/hr_internal/asset/Staff%20Photos/SALES/Zulaikha%20-%20Inside%20Sales%20Executive.png',
          role: 'Sr. Internal Sales Executive',
        },
        {
          name: 'Muhammad Sharun',
          image:
            'https://storage.googleapis.com/hr_internal/asset/Staff%20Photos/SALES/Sharun%20-%20Inside%20Sales%20Executive.png',
          role: 'Internal Sales Executive',
        },
      ],
      nonExecutives: [
        {
          name: 'Izzat Ezzuddin',
          image:
            'https://storage.googleapis.com/hr_internal/asset/Staff%20Photos/HR/Izzat%20-%20HR%20Intern.png',
          role: 'Intern',
        },
      ],
    },
    // Repeat similar structure for other departments
  ];
}
