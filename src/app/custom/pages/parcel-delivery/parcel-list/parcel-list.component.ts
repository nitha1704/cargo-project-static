import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parcel-list',
  templateUrl: './parcel-list.component.html',
  styleUrls: ['./parcel-list.component.scss']
})
export class ParcelListComponent implements OnInit {

  status = "เข้าโกดังจีน";
  bsValue = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
