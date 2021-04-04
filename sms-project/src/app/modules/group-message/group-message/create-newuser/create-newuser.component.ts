import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-newuser',
  templateUrl: './create-newuser.component.html',
  styleUrls: ['./create-newuser.component.scss']
})
export class CreateNewuserComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  crateUser(){
    this.router.navigate(['group-message']);
  }

}
