import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class LogInService {
  tokenKey: string = 'token';
  userName:string = 'userName';
  isLoggedIn = false;
  user:UserCheck = new UserCheck();

  constructor(private http:HttpClient, private router:Router) { }

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

 //metodo ritorna se l'utente è loggato true/false
  isAuthenticated( check:boolean): boolean{
    this.isLoggedIn = check;
    return this.isLoggedIn;
  }

  logOut(){
    sessionStorage.clear()
    this.isLoggedIn = false;
    this.router.navigate(['/begin'])
  }

  }
    export class UserCheck {
      username:string ='';
      password:string ='';
}
