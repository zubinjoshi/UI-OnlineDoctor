import { Component, OnInit } from '@angular/core';

function hello() {
  alert('Hello!!!');
}

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

}
