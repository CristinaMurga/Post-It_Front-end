import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class LogInService {
  tokenKey: string = 'token';
  userName:string = 'userName';
 
  constructor(private http:HttpClient) { }
  
  user:User = new User();
  
  headerOptions = new HttpHeaders({
    contentType: 'application/json',
    responseType: 'text'
  })


  //esegui il post del login e le passo il token
  RunLogin(user:string, pwd:string) {
    this.setTokenHttpHeader(user, pwd)
    this.user = {username: user, password: pwd};
    return this.http.post('https://localhost:7045/login', this.user, {headers: this.headerOptions, observe: 'response'});
  }

  //creo il token in session storage 
  setTokenHttpHeader(user:string, pwd:string){
    this.headerOptions = 
      this.headerOptions.set('Authorization','Basic' + btoa(user + ':' + pwd));
      sessionStorage.setItem(this.tokenKey, btoa(user + ':' + pwd));
      sessionStorage.setItem(this.userName, user);

  }
  }
    export class User {
      username:any;
      password:any;
}
