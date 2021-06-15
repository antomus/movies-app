import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from "@angular/common/http"
import { Observable } from "rxjs"

export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const cloneReq = req.clone({
      params: req.params.set(
        "api_key",
        "3afb7c984cd2ddc924e68166baac1828"
      ),
    })
    return next.handle(cloneReq)
  }
}
