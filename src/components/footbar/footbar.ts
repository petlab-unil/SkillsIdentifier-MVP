import { Component } from '@angular/core';

@Component({
  selector: 'footbar',
  templateUrl: 'footbar.html'
})
export class FootbarComponent {

  text: string;

  constructor() {
    console.log('Hello FootbarComponent Component');
    this.text = 'Hello World';
  }

}
