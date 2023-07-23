import { Injectable } from '@angular/core';
import { BookData } from './book-list.model';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BooksListService {
  private booksURL = 'https://s3.amazonaws.com/api-fun/books.json';
  constructor(private httpClient: HttpClient) {}

  // get books data
  getBooksList(): Observable<BookData> {
    return this.httpClient
      .request<BookData>('GET', this.booksURL, {
        responseType: 'json',
      })
      .pipe(retry(1), catchError(this.handleError));
  }

  // handle api errors
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
