import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  users: any;
  posts: any;
  newPost: Post = new Post();
  content: string;

  constructor(private data: DataService){}

  ngOnInit(){

    this.data.getUsers()
    .subscribe(users => {
      this.users = users;
      //console.log(this.users)    
    })   
  }

  postMessage(content){

    console.log(content)
    this.newPost.content = content;
    this.newPost.likesNo = 0;
    this.newPost.userId = 1;

    this.data.publishPost(this.newPost)
      .subscribe(data => console.log(data))

      window.location.reload();

  }

  clearMessage(){
    this.content = "";
  }

    

}
