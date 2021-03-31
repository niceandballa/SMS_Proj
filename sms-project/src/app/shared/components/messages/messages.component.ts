import { Component, Input, OnInit } from '@angular/core';
import { MessageDTO } from '../../models/message-DTO';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  @Input() messages: MessageDTO | undefined;

  time= Date.now()

  constructor() { }

  ngOnInit(): void {
  }

}
