import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/Utente';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http:HttpClient) { }

  PostCustomer(user: User){
    return this.http.post('https://localhost:7045/api/Users', user);
  }
}
