import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from '../model/userData';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  public getUsers(): Observable<User[]> {
    let dataURL = 'https://jsonplaceholder.typicode.com/users';
    return this.httpClient
      .get<User[]>(dataURL)
      .pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      //console.error('An error occurred:', error.error);
      errorMessage = `'An error occurred:', ${error.error}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      // console.error(
      //   `Backend returned code ${error.status}, body was: `,
      //   error.error
      // );
      errorMessage += `Backend returned code ${error.status}, body was: ,
      ${error.error}`;
    }
    // Return an observable with a user-facing error message.

    errorMessage += `Something bad happened; please try again later`;
    return throwError(errorMessage);
  }
}
