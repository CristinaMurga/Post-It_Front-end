import { Component } from '@angular/core';
import { BeginComponent } from './features/begin/begin.component';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './core/menu/menu.component';
import { BoardComponent } from './features/board/board.component';
import { PostItService } from './shared/post-it.service';
import { RegisterService } from './shared/register.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BeginComponent,BoardComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [PostItService,RegisterService]
})
export class AppComponent {
  title = 'post_it';
}
