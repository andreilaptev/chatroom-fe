import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any;
  owner: boolean = false;
  userId: any;
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

}
