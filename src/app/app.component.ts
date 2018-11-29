import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /*template: `<h1> Angular*/
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    console.log('AppComponent constructor called');
  }
}

