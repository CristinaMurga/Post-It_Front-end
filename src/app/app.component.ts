import { Component } from '@angular/core';
import { BeginComponent } from './features/begin/begin.component';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './core/menu/menu.component';
import { LoginComponent } from './core/login/login.component';
import { BoardComponent } from './core/board/board.component';
import { PostItService } from './shared/post-it.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BeginComponent,BoardComponent, MenuComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [PostItService]
})
export class AppComponent {
  title = 'post_it';
}
