import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../constants/api';
import { User } from '../interfaces/user.interface';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  getUsers() {
    return this.http.get<User[]>(`${API}users`).pipe(map(users => {
      return users.map((user, i) => ({ ...user, index: i }));
    }));
  }
  getUserById(user: User) {
    return this.http.get<User>(`${API}users/${user.id}`);
  }
  postUser(user: User) {
    return this.http.post(`${API}users`, user)
  }
  putUser(user: User) {
    return this.http.put(`${API}users/${user.id}`, user)
  }
  deleteUser(user: User) {
    return this.http.delete<User[]>(`${API}users/${user.id}`);
  }
}
