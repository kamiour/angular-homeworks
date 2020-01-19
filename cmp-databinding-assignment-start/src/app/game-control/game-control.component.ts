import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  ref;
  counter: number = 0;
  @Output() gameStarted = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.ref = setInterval(() => {
      this.gameStarted.emit(this.counter++);
    }, 1000)
  }

  onStopGame() {
    clearInterval(this.ref);
  }

}
