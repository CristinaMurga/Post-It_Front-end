import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import { LogInService, UserCheck } from '../../shared/log-in.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private ws: LogInService, private router: Router) { }

  islogged: boolean = false;
  user = new UserCheck()

  //metodo per eseguire il login
  Login(form: NgForm){
    //assengo i valori del form a UserCheck
    this.user.username = form.value.username;
    this.user.password = form.value.pwd;
    console.log('Attempting login...');
    //chiamo metodo post di LongInSevice
    this.ws.RunLogin(this.user).subscribe({
      next: (resp:any) => {
        console.log(resp);
        this.islogged = true;
        this.ws.isAuthenticated(this.islogged)
        this.Redirect();
      },
      error: (err:any) =>{
        console.log(err);
      }
    })
  }
  Redirect(){
    this.router.navigate(['/board'])
  }
}


