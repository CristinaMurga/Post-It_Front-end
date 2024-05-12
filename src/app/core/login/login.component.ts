import { Component } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import { LogInService } from '../../shared/log-in.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private ws: LogInService, private router: Router) { }

  Login(userName: string, password:string) {
    //eseguo il login
    console.log('hola');
    this.ws.RunLogin(userName,password).subscribe({
      next: (resp: any) => {
        
        console.log(resp)
        this.Redirect();
      },
      error: (err: any) => {
        console.log(err);
      }
  })
    
    
  }

  Redirect(){
    this.router.navigate(['/board'])
  }



}
   

