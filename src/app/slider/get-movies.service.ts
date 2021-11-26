import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface GetMoviesData{
  "cardImage": String,
  "titleImage": String,
  "backgroundImage": String,
  "relevance": String,
  "year": String,
  "minAge": String,
  "time": String,
  "season": String,
  "description": String,
  "cast": String[],
  "genre": String[],
  "scenes": String[]
}

@Injectable({
  providedIn: 'root'
})
export class GetMoviesService {

  constructor(private http:HttpClient) {}

  getMoviesService(idMovie:String){
    return this.http.get<GetMoviesData>(`https://private-3923c4-santandercoders809.apiary-mock.com/series/${idMovie}`)
  }
}
