import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
   // Define properties for the component
   heroSections = [
    {
      title: 'Welcome to our library',
      description: 'Experience the future of web design with our cutting-edge solutions.',
      ctaText: 'Get Started',
      ctaLink: '#'
    },
    {
      title: 'Your journey begins here...',
      description: 'Discover new worlds, ideas, and perspectives.',
      ctaText: 'Explore Now',
      ctaLink: '#'
    },
    {
      title: 'Uncover the magic within our shelves',
      description: 'Let curiosity be your guide.',
      ctaText: 'Start Reading',
      ctaLink: '#'
    }
  ];

  features = [
    {
      title: 'Feature 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'Feature 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      title: 'Feature 3',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    
  }

  
}


