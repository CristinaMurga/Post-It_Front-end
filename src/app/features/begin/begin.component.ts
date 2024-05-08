import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-begin',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './begin.component.html',
  styleUrl: './begin.component.css'
})
export class BeginComponent {
  constructor(private router: Router){}
  Login(){
    this.router.navigate(['/login'])
}
}
