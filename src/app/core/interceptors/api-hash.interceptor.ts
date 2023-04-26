import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ApiHashInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const apiKey = sessionStorage.getItem("apikey");
    console.log(apiKey);
    if (apiKey) {
      console.log(apiKey);
      request = request.clone({
        setParams: {
          ts: "1",
          apikey: sessionStorage.getItem("apikey") as string,
          hash: localStorage.getItem("hash") as string,
        },
      });
      return next.handle(request);
    } else {
      return next.handle(request);
    }
  }
}
