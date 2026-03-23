import { Injectable } from '@angular/core';

/* Import HttpClient and Observable */
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  
  /* Constructor makes HttpClient a global object that can be called from other componenets in the code */
  constructor(private httpClient: HttpClient) {}
  
  /* returns a Observable object that contains data fetched from OMDb */
  GetShrekMovieData(): Observable<any> {
    return this.httpClient.get('https://www.omdbapi.com/?s=shrek&apikey=4ed96329');
  }
}
