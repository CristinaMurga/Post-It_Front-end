import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import { LogInService, UserCheck } from '../../shared/log-in.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../models/User';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private ws: LogInService, private router: Router) { }

  @Output() sendData= new EventEmitter<boolean>()
  islogged: boolean = false;
  user = new UserCheck()
  Login(form: NgForm){
    this.user.username = form.value.username;
    this.user.password = form.value.pwd;
    console.log('Attempting login...');
    this.ws.RunLogin(this.user).subscribe({
      next: (resp:any) => {
        console.log(resp);
        this.islogged = true;
        this.checkifLogged();
        this.Redirect();
      },
      error: (err:any) =>{
        console.log(err);
      }
    })
  }
  checkifLogged() {
    this.sendData.emit(this.islogged)
  }
  Redirect(){
    this.router.navigate(['/board'])
  }
}


