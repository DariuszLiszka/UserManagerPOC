import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

import { UserService } from "../../services/user.service";
import { User } from "../../models/user.model";

@Component({
  selector: "app-edit-user",
  templateUrl: "./edit-user.component.html",
  styleUrls: ["./edit-user.component.css"]
})
export class EditUserComponent implements OnInit {
  user: User;
  name: string;
  email: string;
  phone: string;
  address: string;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.user = history.state;
    console.log(this.user);
  }

  onSubmit() {
    const newUser = {
      id: this.user.id,
      name: this.user.name,
      email: this.user.email,
      phone: this.user.phone,
      // TODO:
      address: {
        suite: 'Mocked suite',
        street: 'Mocked street',
        city: 'Mocked city',
        zipcode: 'Mocked zip-code'
      }
    };

    this.userService.changeUserData(newUser).then(() => {
      this.router.navigate(['/']);
    });
  }
}
