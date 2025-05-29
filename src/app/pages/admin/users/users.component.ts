// src/app/pages/admin/users/users.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService, User } from '../../../services/user.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users: User[] = [];

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(res => this.users = res);
  }
}
