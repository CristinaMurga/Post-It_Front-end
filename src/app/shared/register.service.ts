import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http:HttpClient) { }

  PostCustomer(user: User): Observable <any>{
    return this.http.post('https://localhost:7045/api/Users', user);
  }
  getIfUserExist (user:string){
    return this.http.get(`https://localhost:7045/api/Users/${user}`);
  }
}
