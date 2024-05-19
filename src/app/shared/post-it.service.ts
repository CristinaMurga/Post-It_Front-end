import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostIt } from '../models/PostIt';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PostItService {

  constructor(private http:HttpClient) { }
  //get tutti i post-it per utente
  GetPostIts(user: any): Observable<any>{
    return this.http.get(`https://localhost:7045/api/PostIts/${user}`);
  }
  //post new post-it
  NewPostIt(postIt: PostIt){
    return this.http.post('https://localhost:7045/api/PostIts', postIt );
  }
  //editare color, body o position  dei post-it
  EditPostIt(id: number, postIt : PostIt): Observable<any>{
    return this.http.put(`https://localhost:7045/api/PostIts/${id}`, postIt);
  }
 //eliminare post-it
  DeletePostIt(id: number): Observable<any> {
    return this.http.delete(`https://localhost:7045/api/PostIts/${id}`);
  }
  //get lista di colori per i post-it
  GetColors(): Observable<any>{
    return this.http.get('https://localhost:7045/api/Colors');
  }
  GetColorById(colorId:number): Observable<any>{
    return this.http.get(`https://localhost:7045/api/Colors/${colorId}`)
  }
}
