import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  
  constructor(private httpClient: HttpClient) {}

  GetShrekMovieData(): Observable<any> {
    return this.httpClient.get('https://www.omdbapi.com/?s=shrek&apikey=4ed96329');
  }
}
