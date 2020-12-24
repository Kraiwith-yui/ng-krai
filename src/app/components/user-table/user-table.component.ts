import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

  users: User[] = [];
  constructor(
    private svUser: UserService,
    public sanitizer: DomSanitizer,
    private svRouter: Router,
  ) {
    this.getUsers();
  }

  ngOnInit() {
  }

  getUsers() {
    this.svUser.getUsers().subscribe(response => {
      this.users = response;
      console.log(`🚀 ~ this.users`, this.users);
    });
  }

  goCreatePage() {
    this.svRouter.navigate(['', 'create']);
  }
  goUpdatePage(user: User) {
    this.svRouter.navigate(['', 'update', user.id]);
  }

  alertDelete(user: User) {
    const con = confirm(`ต้องการลบ ${user.name}`);
    if (con) {
      this.svUser.deleteUser(user).subscribe(res => {
        alert(`Delete ${user.name} success`);
        this.getUsers();
      });
    }
  }

}
