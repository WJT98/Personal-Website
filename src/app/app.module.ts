import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatExpansionModule } from '@angular/material/expansion'

import { AppComponent } from './app.component';
import { PostCreateComponent } from  './posts/post-create/post-create.component';
import { HeaderComponent } from './header/header.component'
import { PostListComponent } from './posts/post-list/post-list.component'
import { AboutComponent } from './about/about.component'
import { HomeComponent } from './home/home.component'
import { PostsComponent } from './posts/posts.component'

import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule

@NgModule({
  declarations: [
    /**
     * import components
     */
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent,
    AboutComponent,
    HomeComponent,
    PostsComponent
  ],
  imports: [
    /**
     *  import modules from angular
     */
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    AppRoutingModule // CLI adds AppRoutingModule to the AppModule's imports array

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
