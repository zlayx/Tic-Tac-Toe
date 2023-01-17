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
  /* ------------- LOCAL --------------- */
  btnVal1 = "";
  btnVal2 = "";
  btnVal3 = "";
  btnVal4 = "";
  btnVal5 = "";
  btnVal6 = "";
  btnVal7 = "";
  btnVal8 = "";
  btnVal9 = "";

  winner = "";

  bkgcolor = "250, 249, 249";
  TileColor = "";

  xIsNext = true;

  get player() {
    return this.xIsNext ? "X" : "O";
  }

  get plrcolor() {
    return this.xIsNext ? "red" : "blue";
  }
/* ------------- FUNCTIONS --------------- */

  OnInit() {
    this.newGame();
  }

  onMouseEnter() {
    this.TileColor = this.plrcolor;
  }
  onMouseOut() {
    this.TileColor = this.bkgcolor;
  }

  /*  1 2 3
  	  4 5 6
      7 8 9 */
  checkForWin() {
    /* ---------------------------------------- X ---------------------------------------------- */
    if (this.btnVal1="X") {if (this.btnVal2="X") {if (this.btnVal3="X") {this.winner="X"}}}; /* row 1 */
    if (this.btnVal4="X") {if (this.btnVal5="X") {if (this.btnVal6="X") {this.winner="X"}}}; /* row 2 */
    if (this.btnVal7="X") {if (this.btnVal8="X") {if (this.btnVal9="X") {this.winner="X"}}}; /* row 1 */
    if (this.btnVal1="X") {if (this.btnVal4="X") {if (this.btnVal7="X") {this.winner="X"}}}; /* col 1 */
    if (this.btnVal2="X") {if (this.btnVal5="X") {if (this.btnVal8="X") {this.winner="X"}}}; /* col 2 */
    if (this.btnVal3="X") {if (this.btnVal6="X") {if (this.btnVal9="X") {this.winner="X"}}}; /* col 3 */
    if (this.btnVal1="X") {if (this.btnVal5="X") {if (this.btnVal9="X") {this.winner="X"}}}; /* dia l */
    if (this.btnVal3="X") {if (this.btnVal5="X") {if (this.btnVal7="X") {this.winner="X"}}}; /* dia r */

    /* ---------------------------------------- O ---------------------------------------------- */
    if (this.btnVal1="O") {if (this.btnVal2="O") {if (this.btnVal3="O") {this.winner="O"}}}; /* row 1 */
    if (this.btnVal4="O") {if (this.btnVal5="O") {if (this.btnVal6="O") {this.winner="O"}}}; /* row 2 */
    if (this.btnVal7="O") {if (this.btnVal8="O") {if (this.btnVal9="O") {this.winner="O"}}}; /* row 1 */
    if (this.btnVal1="O") {if (this.btnVal4="O") {if (this.btnVal7="O") {this.winner="O"}}}; /* col 1 */
    if (this.btnVal2="O") {if (this.btnVal5="O") {if (this.btnVal8="O") {this.winner="O"}}}; /* col 2 */
    if (this.btnVal3="O") {if (this.btnVal6="O") {if (this.btnVal9="O") {this.winner="O"}}}; /* col 3 */
    if (this.btnVal1="O") {if (this.btnVal5="O") {if (this.btnVal9="O") {this.winner="O"}}}; /* dia l */
    if (this.btnVal3="O") {if (this.btnVal5="O") {if (this.btnVal7="O") {this.winner="O"}}}; /* dia r */
  }

  makeMove1() {
    if (!this.btnVal1) {
      this.btnVal1 = this.player;
      this.xIsNext = !this.xIsNext;
    };
  }
  makeMove2() {
    if (!this.btnVal2) {
      this.btnVal2 = this.player;
      this.xIsNext = !this.xIsNext;
    };
  }
  makeMove3() {
    if (!this.btnVal3) {
      this.btnVal3 = this.player;
      this.xIsNext = !this.xIsNext;
    };
  }
  makeMove4() {
    if (!this.btnVal4) {
      this.btnVal4 = this.player;
      this.xIsNext = !this.xIsNext;
    };
  }
  makeMove5() {
    if (!this.btnVal5) {
      this.btnVal5 = this.player;
      this.xIsNext = !this.xIsNext;
    };
  }
  makeMove6() {
    if (!this.btnVal6) {
      this.btnVal6 = this.player;
      this.xIsNext = !this.xIsNext;
    };
  }
  makeMove7() {
    if (!this.btnVal7) {
      this.btnVal7 = this.player;
      this.xIsNext = !this.xIsNext;
    };
  }
  makeMove8() {
    if (!this.btnVal8) {
      this.btnVal8 = this.player;
      this.xIsNext = !this.xIsNext;
    };
  }
  makeMove9() {
    if (!this.btnVal9) {
      this.btnVal9 = this.player;
      this.xIsNext = !this.xIsNext;
    };
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
    this.winner = "";
  }
}