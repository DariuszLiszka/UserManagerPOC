import { Component, OnInit, Input } from "@angular/core";
import { User } from "../../models/user.model";

@Component({
  selector: "app-user-properties",
  templateUrl: "./user-properties.component.html",
  styleUrls: ["./user-properties.component.css"]
})
export class UserPropertiesComponent implements OnInit {
  user: User;

  ngOnInit() {
    this.user = history.state;
    console.log(this.user);
  }
}
