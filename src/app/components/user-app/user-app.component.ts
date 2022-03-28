import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/userData';

@Component({
  selector: 'app-user-app',
  templateUrl: './user-app.component.html',
  styleUrls: ['./user-app.component.css'],
})
export class UserAppComponent implements OnInit {
  public selectedUser: User = {} as User;
  constructor() {}

  ngOnInit(): void {}
}
