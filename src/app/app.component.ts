import { _getEventTarget } from '@angular/cdk/platform';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  makeMove() {
    alert();
  }

  wins = [
    [0, 1, 2], /* sekrecht*/
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6], /* waagrecht*/
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8], /* diagonal*/
    [2, 4, 6]
  ]

}
