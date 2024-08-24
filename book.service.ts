import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://127.0.0.1:5000/books';

  constructor(private http: HttpClient) { }
  
  getBooklist():Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);

  }

  getBookByTitle(title: string): Observable<any> {
    return this.http.get('${this.apiUrl}?title=${title}');
  }

  // borrowBook(formData: any): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}/borrow`, formData);
  // }

  // returnBook(formData: any): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}/return`, formData);
  // }

}