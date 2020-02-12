import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  

  //url = 'https://localhost:44321/api/';
  url = 'http://chatroom-dev.us-east-1.elasticbeanstalk.com/api/';

  getUsers(){
    return this.http.get(this.url + 'users' );
  }

  getUserByLogin(login){    
    return this.http.get(this.url + 'users/getUser?login=' + login)
  }

  userRegister(user){

    const body = {
      userFullName: user.fullName,
      login: user.login,
      password: user.password
    }
    return this.http.post(this.url + 'users', body)

  }


  getPosts(){
    return this.http.get(this.url + 'posts' );
  }

  publishPost(post){
    const body = {
      content: post.content, 
      likesNo: post.likesNo, 
      userId: post.userId 
  };
    return this.http.post(this.url + 'posts', body )
  }

  addLike(postId, post) {

    const body = {
      
      postId: postId,
      content: post.content, 
      likesNo: post.likesNo, 
      userId: post.userId 
    };

    return this.http.put(this.url + 'Posts/' + postId, body);    

  }


}
