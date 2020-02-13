import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AuthorPipe } from '../author.pipe';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any;
  owner: any;
  userId: any;
  name: string;
  //@Input 

  constructor(private data: DataService){}

  ngOnInit() {
    this.data.getPosts()
    .subscribe(posts => {
        this.posts = posts;
        //console.log(this.posts)
      }
    )

    //console.log(this.posts)
    this.userId = sessionStorage.getItem('userId');
  }

  // ngAfterViewInit(){
  //   this.data.getPosts()
  //   .subscribe(posts => {
  //       this.posts = posts;
  //       console.log(this.posts)
  //     }
  //   )
  // }


  getAuthor(id){
    
    this.data.getUserById(id)
      .subscribe(user => this.owner = user)
      //console.log(this.owner)
      let x = this.owner.userFullname;
      return x;
        
  }

  
}
