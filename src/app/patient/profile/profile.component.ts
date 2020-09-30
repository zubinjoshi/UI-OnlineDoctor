import { Component, OnInit,Input,Output } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {
  public input: any;

  constructor() { 
    this.input = {
      "firstname": "",
      "lastname": "",
      "email": ""
    
  };
  }

  ngOnInit(): void {
  }
  public register() {
    alert("comming soon !!");
  }
    
}
