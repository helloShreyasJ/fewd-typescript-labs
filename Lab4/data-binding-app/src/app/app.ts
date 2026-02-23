/*
  component imports
*/

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list-component/list-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('data-binding-app');
  name:string = 'joe corr';
  count:number = 0;

  /* onClickButton function definition */  
  onClickButton = () => {
    this.count++;
    // alert("Button clicked!");
  }

  /* onImageClick function definition */
  onImageClick = () => {
    this.myBoolean = !this.myBoolean;
    // alert("Double clicked!");
  }

  myBoolean:boolean = true;
}
