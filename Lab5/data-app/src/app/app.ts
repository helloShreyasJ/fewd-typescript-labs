import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './services/data-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})

/* implementing ngOnInit lets us initialise data on init */
export class App implements OnInit {
  students:any[]=[];
  weather:any[]=[];
  temp:string = '';
  
  constructor(private dataService:DataService) {}

  ngOnInit(): void {
    this.dataService.GetStudentData().subscribe(
      (data)=> {
        this.students = data.students;
        console.log(this.students);
      }
    );

    /* subscribe to work with the data asyncronously*/
    /* write a callback function inside subscribe */
    this.dataService.GetWeatherData().subscribe(
      (data)=> {
        this.weather = data.weather; /* where the magic happens of getting which field in the json */
        this.temp = ((data.main.temp)-273.15).toFixed(2).toString();
        console.log(this.weather);
      }
    );
  }
}
