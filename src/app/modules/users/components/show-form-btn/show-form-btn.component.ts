import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-show-form-btn",
  templateUrl: "./show-form-btn.component.html",
  styleUrls: ["./show-form-btn.component.css"]
})
export class ShowFormBtnComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  addUser($event) {
    console.log('event', $event);
  }
}
