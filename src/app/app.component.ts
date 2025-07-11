import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'women-app';
  cards = [
    {
      title: 'Events',
      image: 'assets/img2.jpg',
      description:
        'Explore upcoming events celebrating women in tech and leadership.',
    },
    {
      title: 'Notable Women in Technology',
      image: 'assets/notable_women.png',
      description:
        'Learn about pioneers and innovators who shaped the tech world.',
    },
    {
      title: 'Members',
      image: 'assets/courses_and_training.png',
      description: 'Meet our vibrant community of women and allies.',
    },
    {
      title: 'Mentors',
      image: 'assets/notable_women.png',
      description: 'Connect with experienced mentors who guide and inspire.',
    },
    {
      title: 'Courses and Training',
      image: 'assets/courses_and_training.png',
      description: 'Access learning resources to grow your skills and career.',
    },
    {
      title: 'About Us',
      image: 'assets/about_us.png',
      description:
        'Discover our mission, vision, and the story behind our community.',
    },
    {
      title: 'FAQs',
      image: 'assets/faqq.png',
      description:
        'Find answers to common questions about our programs and events.',
    },
  ];
}
