import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/userData';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {
  @Input() selectedUser: User = {} as User;
  constructor() {}

  ngOnInit(): void {}

  public isNotEmpty() {
    return Object.keys(this.selectedUser).length > 0;
  }
}
