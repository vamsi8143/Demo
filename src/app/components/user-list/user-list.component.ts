import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/model/userData';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  @Output() sendUser = new EventEmitter();

  public users: User[] = [] as User[];
  public clickButton: boolean = false;
  public errorMessage: string = '';
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  public getData(): void {
    this.clickButton = true;
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

  public hideData(): void {
    this.clickButton = false;
    this.users = [];
  }

  public selectUser(user: User) {
    this.sendUser.emit(user);
  }
}
