import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-masonry',
  standalone: false,

  templateUrl: './dynamic-masonry.component.html',
  styleUrl: './dynamic-masonry.component.scss',
})
export class DynamicMasonryComponent implements OnInit {
  ngOnInit(): void {} // Number of columns per row
  columnsPerRow = 3;

  notes = [
    {
      receiverNickName: 'John Doe',
      receiverDesignation: 'Manager',
      content: 'Thank you for your support and guidance!',
      senderName: 'Jane Smith',
      photo: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      color: 'bg-blue-100',
    },
    {
      receiverNickName: 'John Doe',
      receiverDesignation: 'Manager',
      content: 'Thank you for your support and guidance!',
      senderName: 'Jane Smith',
      photo: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      color: 'bg-blue-100',
    },
    {
      receiverNickName: 'John Doe',
      receiverDesignation: 'Manager',
      content: 'Thank you for your support and guidance!',
      senderName: 'Jane Smith',
      photo: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      color: 'bg-blue-100',
    },
    {
      receiverNickName: 'Alice Brown',
      receiverDesignation: 'Developer',
      content: 'Great work on the recent project! But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because i',
      senderName: 'Bob White',
      photo: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      color: 'bg-green-100',
    },
    {
      receiverNickName: 'Charlie Green',
      receiverDesignation: 'Designer',
      content: 'Amazing design ideas as always!',
      senderName: 'Eve Black',
      photo: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      color: 'bg-yellow-100',
    },
    {
      receiverNickName: 'Chris',
      receiverDesignation: 'Executive',
      content: 'AWESOMEEE',
      senderName: 'Laura Lee',
      photo: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      color: 'bg-yellow-100',
    },
    {
      receiverNickName: 'Michael',
      receiverDesignation: 'Team Lead',
      content: 'Thank you for all your hard work and dedication.But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.',
      senderName: 'Robert Brown',
      photo: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      color: 'bg-red-100',
    },
    {
      receiverNickName: 'Chris',
      receiverDesignation: 'Executive',
      content: 'AWESOMEEE',
      senderName: 'Laura Lee',
      photo: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      color: 'bg-yellow-100',
    },
    {
      receiverNickName: 'Chris',
      receiverDesignation: 'Executive',
      content: 'AWESOMEEE',
      senderName: 'Laura Lee',
      photo: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      color: 'bg-yellow-100',
    },
    {
      receiverNickName: 'Chris',
      receiverDesignation: 'Executive',
      content: 'AWESOMEEE',
      senderName: 'Laura Lee',
      photo: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      color: 'bg-yellow-100',
    },
    {
      receiverNickName: 'Michael',
      receiverDesignation: 'Team Lead',
      content: 'Sed ut perspiciatisquasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
      senderName: 'Robert Brown',
      photo: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      color: 'bg-red-100',
    },
    {
      receiverNickName: 'Chris',
      receiverDesignation: 'Executive',
      content: 'AWESOMEEE',
      senderName: 'Laura Lee',
      photo: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      color: 'bg-yellow-100',
    },
    {
      receiverNickName: 'Michael',
      receiverDesignation: 'Team Lead',
      content: 'Thank you for all your hard work and dedication.',
      senderName: 'Robert Brown',
      photo: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      color: 'bg-red-100',
    },
    {
      receiverNickName: 'Chris',
      receiverDesignation: 'Executive',
      content: 'Sed ut perspiciatis unde omnis iste ',
      senderName: 'Laura Lee',
      photo: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      color: 'bg-yellow-100',
    },
  ];

  getColor(note: any): string {
    return note.color || 'bg-gray-100';
  }

  // Check if the note is the last in a row
  isLastInRow(index: number): boolean {
    return (
      (index + 1) % this.columnsPerRow === 0 || index === this.notes.length - 1
    );
  }
}
