import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-view',
  templateUrl: './group-view.component.html',
  styleUrls: ['./group-view.component.scss']
})
export class GroupViewComponent implements OnInit {

  //Data of TEST
  dataGroup = [ 
                { groupName: 'DDLIGAZ Group', countID: 6}
                , { groupName: 'GLIGAZ Group', countID: 3}
                , { groupName: '123xBET Group', countID: 18}
              ];

  constructor() { }

  ngOnInit(): void { }
}
