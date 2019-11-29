import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { UsersRoutingModule } from "./users-routing.module";
import { UserService } from "./services/user.service";

import { UsersComponent } from "./components/users/users.component";
import { UserComponent } from "./components/user/user.component";
import { AddUserComponent } from "./components/add-user/add-user.component";
import { ShowFormBtnComponent } from "./components/show-form-btn/show-form-btn.component";
import { UserPropertiesComponent } from "./components/user-properties/user-properties.component";
import { EditUserComponent } from "./components/edit-user/edit-user.component";
import { BackHomeBtnComponent } from "./components/back-home-btn/back-home-btn.component";
import { CreatePostComponent } from "./components/create-post/create-post.component";
import { CommentPostComponent } from "./components/comment-post/comment-post.component";
@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    AddUserComponent,
    ShowFormBtnComponent,
    UserPropertiesComponent,
    EditUserComponent,
    BackHomeBtnComponent,
    CreatePostComponent,
    CommentPostComponent
  ],
  imports: [CommonModule, RouterModule, FormsModule, UsersRoutingModule],
  providers: [UserService]
})
export class UsersModule {}
