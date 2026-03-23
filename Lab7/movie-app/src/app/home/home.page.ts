import { Component } from '@angular/core';

/* Add Ion Cards imports and related imports for the List format */
import { IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

/* Import MovieService to fetch movies with its methods */
import { MovieService } from '../movie-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem,
  IonLabel,
  IonList,
  IonThumbnail ],
})
export class HomePage {
  constructor(private service: MovieService) {}

  /* Movies stored here get listed */
  shrekMovies:any[] = [];

  /* subscribe to GetShrekMovieData() and pass data to array of Shrek Movies */
  ionViewWillEnter() {
    this.service.GetShrekMovieData().subscribe((data) => { // NOTE: This is a callback function, function within a function that goes to get data and feeds that data into the function
      this.shrekMovies = data.Search;
      console.log(this.shrekMovies);
    });
  }
}
