import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor (private httpClient: HttpClient) {

  }

  /* service that return Observable, to work asynchronously */
  GetStudentData():Observable<any> {
    /* Use the get method of the HttpClient to get data from API */
    return this.httpClient.get('https://api.jsonblob.com/019cadd9-1ac4-7a02-92e6-2da042772f8b')
  }

  GetWeatherData():Observable<any> {
    /* return observable */
    /* Using the get method of HttpClient to get data from API */
    return this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?q=Galway&appid=6a66416403ed8e5e6e762cb8c261f303');
  }
}
