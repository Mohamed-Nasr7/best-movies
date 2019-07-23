import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllMoviesService {

  constructor(private http:HttpClient) { }

  getMovs(){
    return this.http.get("http://www.omdbapi.com/?s=%22the%22&apikey=5eaf5533")
  }
}
