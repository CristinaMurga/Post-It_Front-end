import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostIt } from '../models/PostIt';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PostItService {

  constructor(private http:HttpClient) { }
  
  GetPostIts(): Observable<any>{
    return this.http.get('https://localhost:7045/api/PostIts');
  }
  NewPostIt(postIt: PostIt){
    return this.http.post('https://localhost:7045/api/PostIts', postIt );
  }


  EditPostIt(id: number, postIt : PostIt): Observable<any>{
    return this.http.put(`https://localhost:7045/api/PostIts/${id}`, postIt);
  }

  DeletePostIt(id: number): Observable<any> {
    return this.http.delete(`https://localhost:7045/api/PostIts/${id}`);
  }

  GetColors(): Observable<any>{
    return this.http.get('https://localhost:7045/api/Colors');
  }
  GetColorById(colorId:number): Observable<any>{
    return this.http.get(`https://localhost:7045/api/Colors/${colorId}`)
  }
}
