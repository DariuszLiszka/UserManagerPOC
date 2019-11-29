import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import uuidv4  from 'uuid/v4'

import { UserService } from "../../services/user.service";
import { User } from "../../models/user.model";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.css"]
})
export class AddUserComponent implements OnInit {

  name: string;
  email: string;
  phone: string;
  address: string;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    const newUser: User = {
      id: uuidv4(),
      name: this.name,
      email: this.email,
      phone: this.phone,
      // TODO:
      address: {
        suite: 'Mocked suite',
        street: 'Mocked street',
        city: 'Mocked city',
        zipcode: 'Mocked zip-code'
      }
    };

    this.userService.addUser(newUser).then(() => {
      this.router.navigate(['/']);
    });
  }
}
