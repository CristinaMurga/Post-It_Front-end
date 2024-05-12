import { Component } from '@angular/core';
import { RegisterService } from '../../shared/register.service';
import { User } from '../../models/Utente';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [RegisterService]
})
export class RegisterComponent {
  constructor(private ws: RegisterService){}
  newUser: User = new User()
  RegisterUser(userName: string, password: string){
    this.newUser.username = userName;
    this.newUser.passwordSalt = password;

    this.ws.PostCustomer(this.newUser).subscribe({
      next: (data: any) => {
      console.log(data);
      console.log("ok")
      },
      error: (err: any) => {
        console.log(err)
      },
    })
  }
}
