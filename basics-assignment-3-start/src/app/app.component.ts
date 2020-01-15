import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  styles: [`
    .color-white {
      color: white;
    }
  `]
})
export class AppComponent {
  paragraphVisible = true;
  counter = 0;
  clicks = [];

  toggleParagraph() {
    this.paragraphVisible = this.paragraphVisible == true ? false : true;
    this.counter++;
    this.clicks.push(this.counter);
  }

  getColor(click) {
    return click > 4 ? 'blue' : 'none';
  }

  isFifthPlus(click) {
    return click > 4 ? true : false;
  }
}
