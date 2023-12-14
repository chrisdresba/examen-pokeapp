import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { SpinnerService } from '../services/spinner.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  service = inject(SpinnerService);

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.service.show(); // Activa el spinner

    return next.handle(req).pipe(
      finalize(() => {
        setTimeout(() => {
          this.service.hide();
        }, 400); // Desactiva el spinner
      })
    );
  }
}
