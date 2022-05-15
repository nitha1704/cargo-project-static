import { Component, OnInit } from "@angular/core";
import Dropzone from "dropzone";

@Component({
  selector: "app-payment-notice",
  templateUrl: "./payment-notice.component.html",
  styleUrls: ["./payment-notice.component.scss"],
})
export class PaymentNoticeComponent implements OnInit {
  isModalDisplay: Boolean;
  isMeridian: any;
  myTime: any;
  constructor() {}

  ngOnInit(): void {
    this.dropzoneInit();
  }

  billSubmit(amount: string, date: string, myTime: Date) {
    const receiptInfo = {
      amount: Number(amount),
      date: date,
      myTime: myTime,
    };
  }

  checkValue(elem: any): void {
    const valueNumber = Number(elem.value);
    if (valueNumber < 1) {
      elem.value = 1;
    }
  }

  dropzoneInit() {
    Dropzone.autoDiscover = false;
    let currentSingleFile = undefined;
    // single dropzone file - accepts only images
    new Dropzone(document.getElementsByClassName("dropzone-single")[0], {
      url: "/",
      thumbnailWidth: null,
      thumbnailHeight: null,
      previewsContainer:
        document.getElementsByClassName("dz-preview-single")[0],
      previewTemplate:
        document.getElementsByClassName("dz-preview-single")[0].innerHTML,
      maxFiles: 1,
      acceptedFiles: "image/*",
      init: function () {
        this.on("addedfile", function (file) {
          if (currentSingleFile) {
            this.removeFile(currentSingleFile);
          }
          currentSingleFile = file;
        });
      },
    });
    document.getElementsByClassName("dz-preview-single")[0].innerHTML = "";
  }
}
