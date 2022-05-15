import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-all-items",
  templateUrl: "./all-items.component.html",
  styleUrls: ["./all-items.component.scss"],
})
export class AllItemsComponent implements OnInit {
  
  bsValue:Date = new Date();

  constructor() {}

  ngOnInit(): void {}

  changeDropdownMenuValue(item: any) {
    const buttonValue = item.parentNode.parentNode.querySelector(
      "#dropdownMenuButton"
    );
    const dropdownValue = item.innerHTML;
    buttonValue.innerHTML = dropdownValue;
  }
}
