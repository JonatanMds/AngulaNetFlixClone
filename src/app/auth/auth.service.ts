import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  intendedUrl: string = '';
  constructor() { }
}
