import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';

export class LoggingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // 'do' allows us to execute any code when a request comes through here on the observable
    // without consuming it
    return next.handle(req).do(
      (event) => {
        console.log('Logging interceptor: ', event)
      }
    );
  }
}
