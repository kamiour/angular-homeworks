import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-warning',
  //templateUrl: './message-warning.component.html',
  //styleUrls: ['./message-warning.component.css'],
  template: `
    <p>{{ warning }}</p>
  `,
  styles: [`
    p {
      color: red;
      font-weight: bold;
      background-color: yellow;
      padding: 40px;
      margin: 0;
    }
  `]
})
export class MessageWarningComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  warning = "Don't do it!";
}
