import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs';

export interface UserInfo{  
  popular: String[],
  keepWatching: String[]
}

@Injectable({
  providedIn: 'root'
})

export class GetUserService {

  constructor(private http: HttpClient) { }

  getUser(idUser:number){
    return this.http.get<UserInfo>(`https://private-3923c4-santandercoders809.apiary-mock.com/users/${idUser}`)
  }

}
