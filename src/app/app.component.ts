import { _getEventTarget } from '@angular/cdk/platform';
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  btnVal = "";
  xIsNext = true;
  get player() {
    return this.xIsNext ? "X" : "O";
  }

  OnInit() {
    this.newGame();
  }

  makeMove() {
    this.btnVal = this.player;
    this.xIsNext = !this.xIsNext;
  }

  newGame() {
    this.xIsNext = true;
    this.btnVal = "";
  }
}