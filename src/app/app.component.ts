import { Component } from '@angular/core';
import { BeginComponent } from './features/begin/begin.component';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './core/menu/menu.component';
import { LoginComponent } from './core/login/login.component';
import { BoardComponent } from './core/board/board.component';
import { PostItService } from './shared/post-it.service';
import { RegisterComponent } from './core/register/register.component';
import { LogInService } from './shared/log-in.service';
import { RegisterService } from './shared/register.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BeginComponent,BoardComponent, MenuComponent, LoginComponent,RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [PostItService, LogInService,RegisterService]
})
export class AppComponent {
  title = 'post_it';
}
