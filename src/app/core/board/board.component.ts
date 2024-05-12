import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostItService } from '../../shared/post-it.service';
import { PostIt } from '../../models/postIt';
import { PostItComponent } from '../../features/post-it/post-it.component';


@Component({
  selector: 'app-board',
  standalone: true,
  imports: [RouterOutlet,PostItComponent,CommonModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css',
  providers: [PostItService]
})
export class BoardComponent {
constructor(private ws: PostItService){}

ngOnInit(){
  this.getPostIts();
}

 postItsList: PostIt[]=[]

  getPostIts(){
    this.ws.GetPostIts().subscribe({
      next: (data: PostIt[]) => {
        this.postItsList = data;
        console.log("ok")
        console.log(data)
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }

}
