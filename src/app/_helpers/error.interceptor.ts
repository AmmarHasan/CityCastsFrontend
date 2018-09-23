import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService, AlertService } from '../_services';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
      private authenticationService: AuthenticationService,
      public snackBar: MatSnackBar
    ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            // if (err.status === 401) {
            //     // auto logout if 401 response returned from api
            //     this.authenticationService.logout();
            //     location.reload(true);
            // }
console.log(err);

            const error = err.error.error;
            const errorMessage = error.message || error.details.messages[Object.keys(error.details.messages)[0]];
            this.snackBar.open(errorMessage, 'Dismiss', {duration: 2000});
            return throwError(error);
        }));
    }
}
