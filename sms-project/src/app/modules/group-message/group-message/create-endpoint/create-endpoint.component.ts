import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-endpoint',
  templateUrl: './create-endpoint.component.html',
  styleUrls: ['./create-endpoint.component.scss']
})
export class CreateEndpointComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  addEndPoint(){
    this.router.navigate(['group-message']);
  }

}
