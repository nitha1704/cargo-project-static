import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-presentation",
  templateUrl: "./presentation.component.html",
  styleUrls: ["./presentation.component.scss"],
})
export class PresentationComponent implements OnInit {
  test: Date = new Date();
  isCollapsed: boolean = false;
  focus: boolean = false;

  constructor() {

  }

  ngOnInit() {}


}