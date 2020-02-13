import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { ControlsComponent } from './controls/controls.component';
import { DataService } from './data.service';
import { AuthorPipe } from './author.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    ControlsComponent,
    AuthorPipe,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
