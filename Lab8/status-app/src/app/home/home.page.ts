import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonButton, IonText } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonText, RouterLink, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonButton],
})
export class HomePage {
  constructor(private storage: Storage) {}
   status: string = "";

  ionViewWillEnter = async () => {
    await this.storage.create(); /* init storage for homepage */
    this.status = await this.storage.get("current_status"); /* update current status with value stored in storage */
  }

 


}
