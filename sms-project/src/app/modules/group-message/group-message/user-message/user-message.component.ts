import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageDTO } from 'src/app/shared/models/message-DTO';

@Component({
  selector: 'app-user-message',
  templateUrl: './user-message.component.html',
  styleUrls: ['./user-message.component.scss']
})
export class UserMessageComponent implements OnInit {

  userID: string;

  messages = [ 
    { userName: 'dds_knw', company: 'KTC', otp: '111111', ref: 'A11B22'},
    { userName: 'dds_knw', company: 'SCB', otp: '111112', ref: 'A11B23'},
    { userName: 'dds_knw', company: 'KFC', otp: '111113', ref: 'A11B24'},
    { userName: 'ddk_wrp', company: 'JPG', otp: '211111', ref: 'C11B22'},
    { userName: 'ddk_wrp', company: 'PNG', otp: '211112', ref: 'C11B23'},
    { userName: 'ddk_wrp', company: 'GIF', otp: '211113', ref: 'C11B24'},
  ];

  message: Array<MessageDTO> = [];

  constructor(private route:ActivatedRoute) {
    this.userID = this.route.snapshot.params['userID'];
  }

  ngOnInit(): void {
    this.messages.filter(data => data.userName == this.userID).forEach(data => this.message.push(data));
  }

}
