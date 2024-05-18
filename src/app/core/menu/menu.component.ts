import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, LoginComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
