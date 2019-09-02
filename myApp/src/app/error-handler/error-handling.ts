import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandling implements ErrorHandler {
  handleError(error) {
    if (error.rejection) {
      // httpError
    }
    console.log(error.stack);
  }
}
