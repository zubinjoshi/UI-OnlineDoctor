import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  slno: number;
  city: string;
  email: string;
  phone: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {slno: 1, name: 'zubin joshi', city:'Delhi' , email:'test12@gmail.com',phone:'90900000'},
  {slno: 2, name: 'zubin joshi', city:'Delhi' , email:'test12@gmail.com',phone:'90900000'},
  {slno: 3, name: 'zubin joshi', city:'Delhi' , email:'test12@gmail.com',phone:'90900000'},
  {slno: 4, name: 'zubin joshi', city:'Delhi' , email:'test12@gmail.com',phone:'90900000'},
  {slno: 5, name: 'zubin joshi', city:'Delhi' , email:'test12@gmail.com',phone:'90900000'},
  {slno: 6, name: 'zubin joshi', city:'Delhi' , email:'test12@gmail.com',phone:'90900000'},
  {slno: 7, name: 'zubin joshi', city:'Delhi' , email:'test12@gmail.com',phone:'90900000'},

];
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {
  expandedElement: any;
  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['slno', 'name', 'city','email', 'phone'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
}
cellClicked(element) {
  console.log(element.name + ' cell clicked');
}
}