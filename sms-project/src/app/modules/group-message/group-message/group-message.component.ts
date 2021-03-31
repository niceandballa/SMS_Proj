import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-message',
  templateUrl: './group-message.component.html',
  styleUrls: ['./group-message.component.scss']
})
export class GroupMessageComponent implements OnInit {

  //Data of TEST
  dataRest = [ 
    { restGroupName: 'Line Notofication'},
    { restGroupName: 'Restful API'},
  ];

  dataUsers = [ 
    { userName: 'dds_knw', online: true},
    { userName: 'ddk_wrp', online: true},
    { userName: 'dds_skd', online: false},
  ];

  messages = [ 
    { userName: 'dds_knw', company: 'KTC', otp: '111111', ref: 'A11B22'},
    { userName: 'dds_knw', company: 'SCB', otp: '111112', ref: 'A11B23'},
    { userName: 'dds_knw', company: 'KFC', otp: '111113', ref: 'A11B24'},
    { userName: 'ddk_wrp', company: 'JPG', otp: '211111', ref: 'C11B22'},
    { userName: 'ddk_wrp', company: 'PNG', otp: '211112', ref: 'C11B23'},
    { userName: 'ddk_wrp', company: 'GIF', otp: '211113', ref: 'C11B24'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
