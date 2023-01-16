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
  btnVal1 = "";
  btnVal2 = "";
  btnVal3 = "";
  btnVal4 = "";
  btnVal5 = "";
  btnVal6 = "";
  btnVal7 = "";
  btnVal8 = "";
  btnVal9 = "";

  xIsNext = true;
  get player() {
    return this.xIsNext ? "X" : "O";
  }

  OnInit() {
    this.newGame();
  }

  makeMove1() {
    if (this.btnVal1="X") {return };
    if (this.btnVal1="O") {return };
    this.btnVal1 = this.player;
    this.xIsNext = !this.xIsNext;
  }
  makeMove2() {
    this.btnVal2 = this.player;
    this.xIsNext = !this.xIsNext;
  }
  makeMove3() {
    this.btnVal3 = this.player;
    this.xIsNext = !this.xIsNext;
  }
  makeMove4() {
    this.btnVal4 = this.player;
    this.xIsNext = !this.xIsNext;
  }
  makeMove5() {
    this.btnVal5 = this.player;
    this.xIsNext = !this.xIsNext;
  }
  makeMove6() {
    this.btnVal6 = this.player;
    this.xIsNext = !this.xIsNext;
  }
  makeMove7() {
    this.btnVal7 = this.player;
    this.xIsNext = !this.xIsNext;
  }
  makeMove8() {
    this.btnVal8 = this.player;
    this.xIsNext = !this.xIsNext;
  }
  makeMove9() {
    this.btnVal9 = this.player;
    this.xIsNext = !this.xIsNext;
  }

  newGame() {
    this.xIsNext = true;
    this.btnVal1 = "";
    this.btnVal2 = "";
    this.btnVal3 = "";
    this.btnVal4 = "";
    this.btnVal5 = "";
    this.btnVal6 = "";
    this.btnVal7 = "";
    this.btnVal8 = "";
    this.btnVal9 = "";
  }
}