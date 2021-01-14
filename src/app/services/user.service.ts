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
  getUserById(userId: number) {
    return this.http.get<User>(`${API}users/${userId}`);
  }
  postUser(user: User) {
    return this.http.post<User>(`${API}users`, user)
  }
  putUser(userId: number, user: User) {
    return this.http.put<User>(`${API}users/${userId}`, user)
  }
  deleteUser(user: User) {
    return this.http.delete<User[]>(`${API}users/${user.id}`);
  }
}
