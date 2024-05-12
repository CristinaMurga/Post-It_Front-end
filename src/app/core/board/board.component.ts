import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostItService } from '../../shared/post-it.service';
import { PostIt } from '../../models/PostIt';
import { Color } from '../../models/Color';
import { retry } from 'rxjs';


@Component({
  selector: 'app-board',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css',
  providers: [PostItService]
})
export class BoardComponent {
  constructor(private ws: PostItService){}

  ngOnInit(){
    this.getPostIts();
  }
  
  color: Color = new  Color();
  colorlist: Color[]=[];
  postItsList: PostIt[]=[];
  editedPostIt: PostIt = new PostIt();

  
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

  editPostItColor(colorHexadecimal: string, postIt:PostIt){
  console.log(postIt);
    postIt.color= colorHexadecimal
    this.ws.EditPostIt(postIt.id,postIt).subscribe({
      next: (resp: any) => {
        console.log("ok");
        console.log(resp)
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  } 

  editPostItBody(body:string, postIt:PostIt){
    console.log(postIt);
    postIt.body= body
    this.ws.EditPostIt(postIt.id,postIt).subscribe({
      next: (resp: any) => {
        console.log("ok");
        console.log(resp)
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  } 

  DeletePostIt(id: number) {
    this.ws.DeletePostIt(id).subscribe({
      next: (data: any) =>{
        this.getPostIts();
        console.log("ok");
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
  getColors(){
    this.ws.GetColors().subscribe({
      next: (data: Color[]) => {
        this.colorlist = data;
        console.log("ok")
        console.log(data)
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }


}




