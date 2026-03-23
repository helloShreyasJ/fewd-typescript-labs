import { Component } from '@angular/core';
import { IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
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

  shrekMovies:any[] = [];

  ionViewWillEnter() {
    this.service.GetShrekMovieData().subscribe((data) => { // callback function, function within a function that goes to get data and feeds that data into the function
      this.shrekMovies = data.Search;
      console.log(this.shrekMovies);
    });
  }
}
