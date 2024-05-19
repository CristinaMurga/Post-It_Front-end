import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterService } from '../../shared/register.service';
import { User } from '../../models/User';
import { Router, RouterOutlet } from '@angular/router';  
import { FormsModule,} from '@angular/forms';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,RouterOutlet, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [RegisterService]
})
export class RegisterComponent {
  constructor(private ws: RegisterService, private router: Router){}

  newUser: User = new User()  
  errorMessage:boolean = false;
  mandatory: boolean= false;


  //metodo per registrare nuovi utenti
  RegisterUser(userName: string, password: string){
    //controllo se username e password arrivano vuoti
    if(userName  == '' || password == ''){
        this.mandatory= true;
        return;
    }
    //controllo se l'username è gia esistente
    this.ws.getIfUserExist(userName).subscribe({
      next: (data:any) => {
       if(data){
        // data = utente esistente
        this.errorMessage= true;
        this.mandatory= false;
       }else{
        // se username non è esistente valorizzo newUser:User con i dati del form 
        this.newUser.username = userName;
        this.newUser.passwordSalt = password;
        this.errorMessage = false;

        //eseguo chiamata post di RegisterService
        this.ws.PostCustomer(this.newUser).subscribe({
          next: (resp:any) => {
           this.redirect()
          },
          error: (err: any) => {
            console.log(err);
          }
        })
       }

       },
       error: (err: any) => {
         console.log(err);
       }
    })
  }

  redirect(){
    this.router.navigate(['/login']);
  }
}
