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

  color: Color = new  Color();
  colorlist: Color[]=[];
  postItsList: PostIt[]=[];
  postItNew : PostIt = new PostIt()
  username :any = sessionStorage.getItem('userName');

  constructor(private ws: PostItService){}
 
  ngOnInit(){
    this.getPostIts(this.username);
  }

  //metodo per prendere tutti i post-It in DB per utente
  getPostIts(user:any){    
    this.ws.GetPostIts(user).subscribe({
      next: (data: PostIt[]) => {
        this.postItsList = data;
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }
  //metodo per creare nuovi post-it
  newPostIt(){
    this.postItNew.username = this.username.toString();
    this.postItNew.body ='';
    this.postItNew.color= '#F6F794';
    this.postItNew.id= 0;
    this.positionX= 0;
    this.positionY= 0;

   this.ws.NewPostIt(this.postItNew).subscribe({
    next: (resp:any) => {
      this.getPostIts(this.username);
    },
    error: (err: any) => {
      this.getPostIts(this.username);
    }
   })

  }


  //modifare il colore del post-It
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

  //modifare il texto del post-It
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
//elimina il post-It
  DeletePostIt(id: number) {
    this.ws.DeletePostIt(id).subscribe({
      next: (data: any) =>{
        this.getPostIts(this.username);
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

  // salvo posizione del post-It alla fine del drag and drop
  positionX: number = 0;
  positionY: number = 0;

  dragEnded($event : CdkDragEnd, postIt:PostIt){
  //salvo i dati nativi dell'evento dragEnded
    const {offsetLeft,offsetTop}= $event.source.element.nativeElement;
    const {x,y} = $event.distance;

    //valorizzo le propieta position del oggetto Post-it con la posizione attuale
    postIt.positionLeftX = offsetLeft + x;
    postIt.positionTopY= offsetTop + y;
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




