import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";

import { UserService } from "../../services/user.service";
import { User } from "../../models/user.model";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  @Input() user: User;
  @Output() deleteUser: EventEmitter<User> = new EventEmitter();

  ngOnInit() {

  }

  onDelete(user) {
    this.deleteUser.emit(user);
  }
}
