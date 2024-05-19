import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInService } from '../../shared/log-in.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
constructor(public login : LogInService){}
  
}
