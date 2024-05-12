import { Component } from '@angular/core';
import { PostItService } from '../../shared/post-it.service';
import { PostIt } from '../../models/postIt';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-it',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-it.component.html',
  styleUrl: './post-it.component.css',
  providers: [PostItService]
})
export class PostItComponent {
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
