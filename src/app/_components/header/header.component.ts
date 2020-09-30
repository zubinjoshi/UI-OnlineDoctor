import { Component, OnInit } from '@angular/core';
import { User } from '@app/_models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  user: User;
  constructor() { }

  ngOnInit(): void {
  }
  logout() {
    //  this.accountService.logout();
  }
}
