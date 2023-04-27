import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private snackBar: MatSnackBar) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = "An error has ocurred";
        if (error.error instanceof ErrorEvent) {
          if (!navigator.onLine) {
            errorMessage = "No internet connection";
          }
          console.error(`Error: ${error.error.message}`);
        } else {
          console.error(`Error ${error.status}: ${error.message}`);
        }
        this.showSnackbar(errorMessage);
        return throwError(() => error);
      })
    );
  }

  private showSnackbar(message: string): void {
    this.snackBar.open(message, "Cerrar", {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }
}
