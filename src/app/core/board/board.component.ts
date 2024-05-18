import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostItService } from '../../shared/post-it.service';
import { PostIt } from '../../models/PostIt';
import { Color } from '../../models/Color';
import { CdkDrag, CdkDragEnd ,} from '@angular/cdk/drag-drop'

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [RouterOutlet,CommonModule, CdkDrag],
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
  postItNew : PostIt = new PostIt()
 
  getPostIts(){
    this.ws.GetPostIts().subscribe({
      next: (data: PostIt[]) => {
        this.postItsList = data;
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }
  newPostIt(){
    this.postItNew.userID = 1;
    this.postItNew.body ='';
    this.postItNew.color= '#F6F794';
    this.postItNew.id= 0;
    this.positionX= 0;
    this.positionY= 0;

  
   this.ws.NewPostIt(this.postItNew).subscribe({
    next: (resp:any) => {
      this.getPostIts();
    },
    error: (err: any) => {
      console.log(err);
    }
   })

  }


  //modifare il colore del post It
  editPostItColor(colorHexadecimal: string, postIt:PostIt){
    postIt.color= colorHexadecimal
    this.ws.EditPostIt(postIt.id,postIt).subscribe({
      next: (resp: any) => {
        console.log(resp)
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  } 

  //modifare il texto del post It
  editPostItBody(body:string, postIt:PostIt){
    postIt.body= body
    this.ws.EditPostIt(postIt.id,postIt).subscribe({
      next: (resp: any) => {
        console.log(resp); 
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  } 
//elimina il post It
  DeletePostIt(id: number) {
    this.ws.DeletePostIt(id).subscribe({
      next: (data: any) =>{
        this.getPostIts();
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
  //prende i colori predefinini dal db per mostrarli all'utente quando sceglie il colore del post It
  getColors(){
    this.ws.GetColors().subscribe({
      next: (data: Color[]) => {
        this.colorlist = data;
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }

  positionX: number = 0;
  positionY: number = 0;
  dragEnded($event : CdkDragEnd, postIt:PostIt){
    const {offsetLeft,offsetTop}= $event.source.element.nativeElement;
    const {x,y} = $event.distance;
    this.positionX = offsetLeft + x;
    this.positionY = offsetTop + y;
   console.log(this.positionX, this.positionY)
    postIt.positionLeftX = this.positionX;
    postIt.positionTopY= this.positionY;
    console.log('dragend',postIt);
    this.ws.EditPostIt(postIt.id,postIt).subscribe({
      next: (resp: any) => {
        console.log('ok'); 
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }
}




