import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

  @Input () post: any;
  //@Input () postId: number;
  res: any;


  constructor(private data: DataService){}

  ngOnInit() {
    //console.log(this.post)
  }

  change(){

    this.post.likesNo += 1;

    this.data.addLike(this.post.postId, this.post)
      .subscribe(
        data => this.res = data
      )

      //onsole.log(this.post)   
  
  }

}
