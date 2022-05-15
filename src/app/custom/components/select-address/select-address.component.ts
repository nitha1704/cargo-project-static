import { AfterViewInit, Component, ElementRef, Input, OnInit } from "@angular/core";
import { addresses } from "../../../model/addresses";
declare var $: any

@Component({
  selector: "select-address",
  templateUrl: "./select-address.component.html",
  styleUrls: ["./select-address.component.scss"],
})
export class SelectAddressComponent implements AfterViewInit {
  readonly addresses = addresses;
  elementRef;
  @Input() id;
  constructor(elementRef: ElementRef) {
    this.elementRef = elementRef;
  }
  
  ngAfterViewInit(): void {
      
    const domElem = this.elementRef.nativeElement;
    const id = this.id;
    $(document).ready(function () {
      $(`#${id}`).select2({
        placeholder: "เลือกที่อยู่",
        multiple: false,
        ajax: {
          transport: (params, success) => {
            let pageSize = 10;
            let page = params.data.page || 1;
            let results = addresses
              .filter((i) => new RegExp(params.data.term, "i").test(i.text))
              .map((i) => {
                return { id: i.id, text: i.text };
              });

            let paged = results.slice((page - 1) * pageSize, page * pageSize);
            let options = {
              results: paged,
              pagination: {
                more: results.length >= page * pageSize,
              },
            };
            success(options);
          },
        },
      });
    });
  }
}

 