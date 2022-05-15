import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'create-parcel',
  templateUrl: './create-parcel.component.html',
  styleUrls: ['./create-parcel.component.scss']
})
export class CreateParcelComponent implements OnInit {

  items = [
    {
      parcelNo: '00001',
      type: 'รถ',
      hasBox: true,
      hasQC: false,
      hasPicture: false,
      note: 'message here'
    },
    {
      parcelNo: '00002',
      type: 'เรือ',
      hasBox: false,
      hasQC: true,
      hasPicture: false,
      note: 'message here'
    },
    {
      parcelNo: '00003',
      type: 'รถ',
      hasBox: false,
      hasQC: false,
      hasPicture: true,
      note: 'message here'
    },
    {
      parcelNo: '00004',
      type: 'เรือ',
      hasBox: false,
      hasQC: false,
      hasPicture: false,
      note: 'message here'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  addItem() {
    this.items.push({
      parcelNo: null,
      type: 'รถ',
      hasBox: false,
      hasQC: false,
      hasPicture: false,
      note: null
    })
  }

}
