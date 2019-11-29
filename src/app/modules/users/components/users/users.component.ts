import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import { User } from "../../models/user.model";
@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers()
      .then(data => this.users = data);
  }
  changeUserData(user: User) {
    this.userService.changeUserData(user).then(data => data);
  }
  deleteUser(user: User) {
    this.users = this.users.filter(u => u.id !== user.id);

    this.userService.deleteUser(user).then();
  }
}
