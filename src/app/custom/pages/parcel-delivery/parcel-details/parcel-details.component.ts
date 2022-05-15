import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parcel-details',
  templateUrl: './parcel-details.component.html',
  styleUrls: ['./parcel-details.component.scss']
})
export class ParcelDetailsComponent implements OnInit {

  status = "เข้าโกดังจีน";
  bsValue = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
