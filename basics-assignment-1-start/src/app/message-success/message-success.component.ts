import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-success',
  templateUrl: './message-success.component.html',
  styleUrls: ['./message-success.component.css']
})
export class MessageSuccessComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  success = 'You have succeeded!';
}
