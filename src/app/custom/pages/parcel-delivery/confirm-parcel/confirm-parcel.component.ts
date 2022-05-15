import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'confirm-parcel',
  templateUrl: './confirm-parcel.component.html',
  styleUrls: ['./confirm-parcel.component.scss']
})
export class ConfirmParcelComponent implements OnInit {
  isDisplayAddAddress: boolean = false;

  items = [
    {
      parcelNo: '00001',
      type: 'รถ',
      delivery: 'J&T',
      address: {
        addressName: 'บ้าน',
        customerName: 'ชื่อผู้รับ',
        telephone: '0812345678',
        address1: 'ที่อยู่ 1 ที่มีความยาวมากมากกกกกกก',
        address2: 'ที่อยู่ 2 ที่มีความยาวมากมากกกกกกก',
        subdistrictCode: 12312
      }
    },
    {
      parcelNo: '00002',
      type: 'เรือ',
      delivery: 'J&T',
      address: {
        addressName: 'บ้าน',
        customerName: 'ชื่อผู้รับ',
        telephone: '0812345678',
        address1: 'ที่อยู่ 1',
        address2: 'ที่อยู่ 2',
        subdistrictCode: 12312
      }
    },
    {
      parcelNo: '00003',
      type: 'รถ',
      delivery: 'J&T',
      address: {
        addressName: 'บ้าน',
        customerName: 'ชื่อผู้รับ',
        telephone: '0812345678',
        address1: 'ที่อยู่ 1',
        address2: 'ที่อยู่ 2',
        subdistrictCode: 12312
      }
    }
  ]
  // Pattern : <addr_name> - <c_name>(<tel>) <addr1> <addr2>
  homeAddress = {
    addressName: 'บ้าน',
    customerName: 'ชื่อผู้รับ',
    telephone: '0812345678',
    address1: 'ที่อยู่ 1 ที่มีความยาวมากมากกกกกกก',
    address2: 'ที่อยู่ 2 ที่มีความยาวมากมากกกกกกก',
    subdistrictCode: 12312
  }

  officeAddress = {
    addressName: 'ออฟฟิศ',
    customerName: 'ชื่อบริษัท',
    telephone: '0812345678',
    address1: 'ที่อยู่ 1',
    address2: 'ที่อยู่ 2',
  }

  condomeniumAddress = {
    addressName: 'คอนโด',
    customerName: 'ชื่อผู้รับ',
    telephone: '0812345678',
    address1: 'ที่อยู่ 1',
    address2: 'ที่อยู่ 2',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
