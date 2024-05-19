import { Routes } from '@angular/router';
import { BoardComponent } from './features/board/board.component';
import { BeginComponent } from './features/begin/begin.component';
import { LoginComponent } from './core/login/login.component';
import { RegisterComponent } from './core/register/register.component';
import { authGuard } from './auth/auth.guard';


export const routes: Routes = [
{path:'begin' , component:BeginComponent},
{path:'board', component: BoardComponent, canActivate: [authGuard] },
{path: 'login', component: LoginComponent},
{path: 'register', component: RegisterComponent},
{path: '', redirectTo:'/begin', pathMatch:'full'}
];
