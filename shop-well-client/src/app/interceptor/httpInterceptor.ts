import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class Interceptor implements HttpInterceptor {
 intercept(request: HttpRequest<any>, newRequest: HttpHandler): Observable<HttpEvent<any>> {
 let token = localStorage.getItem('jwt');
 if (token) {
 request = request.clone({
 setHeaders: {
 Authorization: `Bearer ${token}`,
 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
 }
 });
 }
 return newRequest.handle(request);
 }
}