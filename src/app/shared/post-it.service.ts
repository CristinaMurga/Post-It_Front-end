import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostIt } from '../models/postIt';
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
}
