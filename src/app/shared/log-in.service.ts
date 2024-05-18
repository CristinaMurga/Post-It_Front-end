import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LogInService {
  tokenKey: string = 'token';
  userName:string = 'userName';
 
  constructor(private http:HttpClient) { }
  
  user:UserCheck = new UserCheck();
  
  headerOptions = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  });


  //esegui il post del login e le passo il token
  RunLogin(user: UserCheck): Observable<any> {

    this.setTokenHttpHeader(user.username, user.password)
    return this.http.post('https://localhost:7045/login', this.user, { headers: this.headerOptions, observe: 'response' });
  }

  //creo il token in session storage 
  setTokenHttpHeader(user:string, pwd:string){
    this.headerOptions = 
      this.headerOptions.set('Authorization','Basic ' + btoa(user + ':' + pwd));
      sessionStorage.setItem(this.tokenKey, btoa(user + ':' + pwd));
      sessionStorage.setItem(this.userName, user);

  }
  }
    export class UserCheck {
      username:string ='';
      password:string ='';
}
