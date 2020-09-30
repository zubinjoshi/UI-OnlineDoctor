import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';




@Component({
  selector: 'doctor-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})

export class DashboardComponent implements OnInit {

  viewSummary = [
    {"id":1,"name":"Patients Checked","count":590},
    {"id":2,"name":"Income","count":"Rs. 5000"},
    {"id":3,"name":"Next Appointments","count":5},
    {"id":3,"name":"Prescription","count": "550"},
   ];
    ELEMENT_DATA = [
    {slno: 1, name: 'zubin joshi', condition:'Fever' , date:'01/01/2009 10:30PM'},
    {slno: 2, name: 'zubin joshi', condition:'Fever' ,  date:'01/01/2009 10:30PM'},
    {slno: 3, name: 'zubin joshi', condition:'Fever, Headache' ,  date:'01/01/2009 10:30PM'},

  
  ];
  prescription = [
    {medicine: 1234, strength: '30 Mg', frequency: '2 times a day' , duration:'30 days', notes:'stop it if feels drowsy'},
    {medicine: 1234, strength: '30 Mg', frequency: '2 times a day' , duration:'30 days', notes:'stop it if feels drowsy'},
    {medicine: 1234, strength: '30 Mg', frequency: '2 times a day' , duration:'30 days', notes:'stop it if feels drowsy'},
    {medicine: 1234, strength: '30 Mg', frequency: '2 times a day' , duration:'30 days', notes:'stop it if feels drowsy'},
  
  ];
 
   src_url:string="https://meetdctr.daily.co/testvideo";
  urlSafe: SafeResourceUrl;
  show:boolean;
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    
  }
  close()
{
  this.urlSafe=this.sanitizer.bypassSecurityTrustResourceUrl('');
  console.log('clic');
}
start()
{
  this.show=true;
  this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.src_url);
  console.log('clic');
}
}
