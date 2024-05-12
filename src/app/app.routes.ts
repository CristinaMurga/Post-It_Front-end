import { Routes } from '@angular/router';
import { BoardComponent } from './core/board/board.component';
import { BeginComponent } from './features/begin/begin.component';
import { PostItComponent } from './features/post-it/post-it.component';
import { LoginComponent } from './core/login/login.component';
import { RegisterComponent } from './core/register/register.component';


export const routes: Routes = [
{path:'begin' , component:BeginComponent},
{path:'board', component: BoardComponent},
{path: 'post-it' ,component: PostItComponent},
{path: 'login', component: LoginComponent},
{path: 'register', component: RegisterComponent},
{path: '', redirectTo:'/begin', pathMatch:'full'}
];
