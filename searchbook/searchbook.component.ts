import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Book {
  title: string;
  author: string;
  publicationYear: number;
  price: number;
  imageUrl: string; // URL to the book cover image
}


@Component({
  selector: 'app-searchbook',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './searchbook.component.html',
  styleUrl: './searchbook.component.css'
})
export class SearchbookComponent {
  bookTitle: string = '';
  book: any;
  
  // sample data
  books = [
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      publication_year: 1925,
      price: 10.99,
      imageUrl: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781524879761/the-great-gatsby-9781524879761_hr.jpg'
      
    },
    {
      title: '1984',
      author: 'George Orwell',
      publication_year: 1949,
      price: 8.99,
      imageUrl: 'https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      title: 'To Kill a Mochingbird',
      author: 'Harper Lee',
      publication_year: 1960,
      price: 12.99,
      imageUrl: 'https://tinyurl.com/4w5bvx6z'
    }

  ];

  constructor() {}
  searchBook() {
    this.book = this.books.find(b => b.title.toLowerCase() === this.bookTitle.toLowerCase());
  }
}