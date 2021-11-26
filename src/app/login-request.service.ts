import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface User {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})

export class LoginRequestService {
  EndPoint: string = "https://private-3923c4-santandercoders809.apiary-mock.com/login"

  constructor(private http: HttpClient) { 
  }

  login (user:User) {
    return this.http.post(this.EndPoint, user);
  }
}
