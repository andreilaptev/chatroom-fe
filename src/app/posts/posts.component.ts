import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any;
  //@Input 

  constructor(private data: DataService){}

  ngOnInit() {
    this.data.getPosts()
    .subscribe(posts => {
        this.posts = posts;
        //console.log(this.posts)
      }
    )
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
