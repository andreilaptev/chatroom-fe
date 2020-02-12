import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Post } from './post';
import * as CryptoJS from 'crypto-js';
import { User } from './user';

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
  currentUser: any;
  warningMessage;

  temp: any;

  authenticated: boolean;
  register: boolean = false;
  signedIn: boolean = false;
  authorizationError: boolean = false;

  login: string;
  password: string;
  decPassword: string = 'example';
  encPassword: string = 'example';

  newUser: User = new User();

  constructor(private data: DataService){}

  ngOnInit(){

    this.data.getUsers()
    .subscribe(users => {
      this.users = users;
      //console.log(this.users)    
    })   

    if(sessionStorage.getItem('authorized') == 'true') {
      this.authenticated = true;
      this.signedIn = true;
    }  else {
      this.authenticated = false;
      this.signedIn = false;
    } 
  }

  postMessage(content){

    console.log(content)
    this.newPost.content = content;
    this.newPost.likesNo = 0;
    this.newPost.userId = this.currentUser.userId;

    this.data.publishPost(this.newPost)
      .subscribe(data => console.log(data))

      window.location.reload();

  }

  clearMessage(){
    this.content = "";
  }

  signIn(login, password) {

    //this.currentUser.password = password;
    this.data.getUserByLogin(login)
    .subscribe(user => 
      {
      this.currentUser = user[0];
    //console.log(this.currentUser)
    }
    )

    if(this.currentUser == undefined) {
      // this.warningMessage = "Sorry, No such User found (:";
      // this.authorizationError = true;
    }
    else {
      let unHashedPass = this.decrypt(this.currentUser.password, this.decPassword);

      if(unHashedPass == password) {
        this.authorizationError = false;
        this.authenticated = true;
        this.register = false;
        this.signedIn = true;

        sessionStorage.setItem('authorized', 'true');
        sessionStorage.setItem('userId', this.currentUser.userId);

      } else {
        this.authorizationError = true;
        this.warningMessage = "Authorization Error";
      }
    }   
      
  }

  registerRequest(){
    this.register = true;
    this.authenticated = true;
  }

  registerUser(user){
   user.password = this.encrypt(user.password);

  //  this.data.userRegister(user)
  //   .subscribe(data => console.log(data));

    this.register = false;
    this.signedIn = true;
    this.authorizationError = false;
  }

  //this.data.userRegister()

  encrypt(pass){   
    return CryptoJS.AES.encrypt(pass.trim(), this.encPassword.trim()).toString();     
  }

  decrypt(resp, pattern){
    return CryptoJS.AES.decrypt(resp.trim(), pattern.trim()).toString(CryptoJS.enc.Utf8);
  }

  logout(){
    sessionStorage.clear();
    window.location.reload();
  }
    

}
