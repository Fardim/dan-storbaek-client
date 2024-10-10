import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.baseUrl;
  path = `${this.baseUrl}Users`;

  constructor(private http: HttpClient) { }

  getUserList() {
    return this.http.get<User[]>(`${this.path}/GetAllUsers`);
  }

  getUserById(userId: string) {
    return this.http.get<User>(`${this.path}/GetUserById/${userId}`);
  }
  
  createUser(dto: User) {
    return this.http.post<User>(`${this.path}/CreateUser`, dto);
  }
  
  updateUser(dto: User) {
    return this.http.put<User>(`${this.path}/UpdateUser/${dto.id}`, dto);
  }
  
  deleteUser(userId: string) {
    return this.http.delete(`${this.path}/Delete/${userId}`);
  }
}
