import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterService } from '../../shared/register.service';
import { User } from '../../models/User';
import { Router, RouterOutlet } from '@angular/router';  


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [RegisterService]
})
export class RegisterComponent {
  constructor(private ws: RegisterService, private router: Router){}

  newUser: User = new User()  

  RegisterUser(userName: string, password: string){
    this.newUser.username = userName;
    this.newUser.passwordSalt = password;
  
    
    this.ws.PostCustomer(this.newUser).subscribe({
      next: (resp:any) => {
       this.redirect()
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }

  redirect(){
    this.router.navigate(['/board']);
  }
}
