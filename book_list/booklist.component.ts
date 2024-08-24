import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Book {
  id: number;
  title: string;
  author: string;
  publication_year: number;
  imageUrl?: string; // Optional property for image URL
}

@Component({
  selector: 'app-booklist',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent {
  books: Book[] = [
    { id: 1, title: '1984', author: 'George Orwell', publication_year: 1949, imageUrl: 'https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', publication_year: 1960, imageUrl: 'https://tinyurl.com/4w5bvx6z' },
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publication_year: 1925, imageUrl: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781524879761/the-great-gatsby-9781524879761_hr.jpg' }
  ];

  selectedBook: Book | null = null;
  newBook: Book = { id: 0, title: '', author: '', publication_year: new Date().getFullYear() }; // Default year to current year

  addBook() {
    if (this.newBook.title && this.newBook.author && this.newBook.publication_year) {
      this.newBook.id = Math.max(...this.books.map(b => b.id), 0) + 1;
      this.books.push(this.newBook);
      this.newBook = { id: 0, title: '', author: '', publication_year: new Date().getFullYear() };
    }
  }

  editBook(book: Book) {
    this.selectedBook = { ...book };
  }

  updateBook() {
    if (this.selectedBook) {
      const index = this.books.findIndex(b => b.id === this.selectedBook?.id);
      if (index !== -1) {
        this.books[index] = this.selectedBook;
        this.selectedBook = null;
      }
    }
  }

  deleteBook(id: number) {
    this.books = this.books.filter(book => book.id !== id);
  }
}





