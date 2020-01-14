import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = 'default value';

  onInput() {
    this.username = (<HTMLInputElement>event.target).value;
  }

  inputIsEmpty() {
    if (!document.querySelector('input').value) {
      return true;
    } else {
      return false;
    }
  }

  onButtonClick() {
    this.username = "";
  }
}
