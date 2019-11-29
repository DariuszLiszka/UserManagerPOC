import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RouterModule, Routes } from "@angular/router";

import { AddUserComponent } from "./components/add-user/add-user.component";
import { UsersComponent } from "./components/users/users.component";
import { UserPropertiesComponent } from "./components/user-properties/user-properties.component";
import { EditUserComponent } from "./components/edit-user/edit-user.component";

const routes: Routes = [
  { path: "", component: UsersComponent },
  { path: "add", component: AddUserComponent },
  { path: "user/:user.id", component: UserPropertiesComponent },
  { path: "user/edit/:user.id", component: EditUserComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
