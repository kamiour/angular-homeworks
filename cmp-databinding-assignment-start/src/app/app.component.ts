import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() evenComponents: number[] = [];
  @Input() oddComponents: number[] = [];

  onGameStarted(number: number) {
    console.log(number);
    if (number % 2 == 0) {
      this.evenComponents.push(number);
    } else {
      this.oddComponents.push(number);
    }
  }
}
