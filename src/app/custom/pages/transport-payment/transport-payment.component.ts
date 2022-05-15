import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-transport-payment",
  templateUrl: "./transport-payment.component.html",
  styleUrls: ["./transport-payment.component.scss"],
})
export class TransportPaymentComponent implements OnInit {
  
  bsValue:Date = new Date();

  constructor() {}

  ngOnInit(): void {}

  checkAllBox(elem: any) {
    const allItemCheckbox = document.querySelectorAll(
      ".wrapper-table tbody input[type='checkbox']"
    );

    allItemCheckbox.forEach((checkbox: any) => {
      if (elem.checked) {
        checkbox.checked = true;
      } else {
        checkbox.checked = false;
      }
    });
  }
}
