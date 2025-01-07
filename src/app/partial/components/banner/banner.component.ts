import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: false,
  
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent implements OnInit, OnDestroy {
  bannerMessages: string[] = [
    "GeneriCon 2023 is on June 7 – 9 in Denver. Get your ticket →",
    "New Product Launch: Check out our latest features →",
    "Special Discount: 20% off all plans this week →",
    "Join our community event on May 25th. Don't miss out! →"
  ];
  currentMessage: string = this.bannerMessages[0];
  messageIndex: number = 0;
  bannerVisible: boolean = true;
  intervalId: any;

  ngOnInit() {
    // Change the banner message every 10 seconds
    this.intervalId = setInterval(() => {
      this.messageIndex = (this.messageIndex + 1) % this.bannerMessages.length;
      this.currentMessage = this.bannerMessages[this.messageIndex];
    }, 10000); // 10 seconds
  }

  ngOnDestroy() {
    // Clear the interval when the component is destroyed to prevent memory leaks
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  closeBanner() {
    this.bannerVisible = false;
  }
}
