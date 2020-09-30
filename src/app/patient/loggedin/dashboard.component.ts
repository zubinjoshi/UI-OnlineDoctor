import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  ELEMENT_DATA = [
    { aptno: 1234, name: 'zubin joshi', condition: 'Fever', date: '01/01/2009 10:30PM' },
    { aptno: 1234, name: 'zubin joshi', condition: 'Fever', date: '01/01/2009 10:30PM' },
    { aptno: 1234, name: 'zubin joshi', condition: 'Fever', date: '01/01/2009 10:30PM' },


  ];

  prescription = [
    { medicine: 'emaquine', strength: '30 Mg', frequency: '2 times a day', duration: '30 days', notes: 'stop it if feels drowsy' },
    { medicine: 'lariago', strength: '30 Mg', frequency: '2 times a day', duration: '30 days', notes: 'stop it if feels drowsy' },
    { medicine: 'eno', strength: '30 Mg', frequency: '2 times a day', duration: '30 days', notes: 'stop it if feels drowsy' },
    { medicine: 'hajmola', strength: '30 Mg', frequency: '2 times a day', duration: '30 days', notes: 'stop it if feels drowsy' },

  ];
  pharmacy = [
    { name: 'Durga Pharmacy store', address: 'address goes here', city: 'delhi', state: 'Orissa', availablity: 'Open 9 AM to 6 PM' },
    { name: 'phramacy name', address: 'address goes here', city: 'bhawanipatna', state: 'Orissa', availablity: 'Open 9 AM to 6 PM' },
    { name: 'Kalahandi pharma', address: 'address goes here', city: 'Jaipatna', state: 'Orissa', availablity: 'Open 9 AM to 6 PM' },
    { name: 'MyPharama', address: 'address goes here', city: 'Jaipatna', state: 'Orissa', availablity: 'Open 9 AM to 6 PM' },

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
