import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  
  viewSummary = [
    {"id":1,"name":"Patients","count":56840},
    {"id":2,"name":"Doctors","count":500},
    {"id":3,"name":"Pharmacy","count":300},
    {"id":4,"name":"Labs","count":400},
    {"id":5,"name":"Business Partners","count":150},
];
  constructor() { }

  ngOnInit(): void {
  }

}
