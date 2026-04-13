import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar,  IonRadio, IonRadioGroup, IonList, IonItem } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
  standalone: true,
  imports: [ RouterLink, IonButton, IonItem, IonList, IonRadio, IonRadioGroup, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class StatusPage implements OnInit {

  constructor(private storage: Storage) { }

  status: string = ""; /* selected status */

  ngOnInit() {
  }

  ionViewWillEnter = async () => {
    await this.storage.create(); /* init storage for statuspage */
    this.status = await this.storage.get('current_status');
  }

  saveStatus = async () => {
    console.log("Button clicked " + this.status);
    await this.storage.set('current_status', this.status); /* set current_status to selected status */
  }

}
