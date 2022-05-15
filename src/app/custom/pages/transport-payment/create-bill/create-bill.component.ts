import { Component, OnInit } from "@angular/core";
import { provincesData } from "../../../../model/thai_provinces";
import { expressList } from "../../../../model/express_list";
import { Provinces } from "../../../interfaces/provinces";
import { Regions } from "../../../interfaces/regions";

@Component({
  selector: "app-create-bill",
  templateUrl: "./create-bill.component.html",
  styleUrls: ["./create-bill.component.scss"],
})
export class CreateBillComponent implements OnInit {
  isModalDisplay: boolean = false;
  modalButtonMsg: string = "บันทึก";
  provinces: Provinces[] = provincesData;
  expressList: string[] = expressList;
  isRegionDisplay: boolean = false;

  deliveryMethodValue: string = "J&T";
  shippingAddressValue: string = "ที่อยู่จัดส่ง 1";
  billingAddressValue: string = "ที่อยู่สำหรับใบเสร็จ/ใบส่งสินค้า 1";
  regionValue: string = "ภาคกลาง";
  provinceValue: string = "กรุงเทพมหานคร";
  expressValue: string = "PL";

  deliveryMethods: string[] = [
    "J&T",
    "ขนส่งต่างจังหวัด",
    "รถบริษัทจัดส่ง",
    "มารับเอง",
    "ไปรษณีย์ลงทะเบียน",
    "ไปรษณีย์ EMS",
  ];
  shippingAddress: string[] = [
    "ที่อยู่จัดส่ง 1",
    "ที่อยู่จัดส่ง 2",
    "ที่อยู่จัดส่ง 3",
    "ที่อยู่จัดส่ง 4",
    "ที่อยู่จัดส่ง 5",
  ];
  billingAddress: string[] = [
    "ที่อยู่สำหรับใบเสร็จ/ใบส่งสินค้า 1",
    "ที่อยู่สำหรับใบเสร็จ/ใบส่งสินค้า 2",
    "ที่อยู่สำหรับใบเสร็จ/ใบส่งสินค้า 3",
    "ที่อยู่สำหรับใบเสร็จ/ใบส่งสินค้า 4",
    "ที่อยู่สำหรับใบเสร็จ/ใบส่งสินค้า 5",
  ];
  regions: Regions[] = [
    {
      name: "ภาคเหนือ",
      code: "1",
    },
    {
      name: "ภาคกลาง",
      code: "2",
    },
    {
      name: "ภาคตะวันออกเฉียงเหนือ",
      code: "3",
    },
    {
      name: "ภาคตะวันตก",
      code: "4",
    },
    {
      name: "ภาคตะวันออก",
      code: "5",
    },
    {
      name: "ภาคใต้",
      code: "6",
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.getCentralRegion();
  }

  getCentralRegion(): void {
    this.provinces = provincesData.filter(
      (item: Provinces) => item.geography_id === "2"
    );
  }

  showRegion(value: string): void {
    this.deliveryMethodValue = value;
    if (value === "ขนส่งต่างจังหวัด") {
      this.isRegionDisplay = true;
    } else {
      this.isRegionDisplay = false;
    }
  }

  filterProvince(region: Regions): void {
    const filterValue = provincesData.filter(
      (item: Provinces) => item.geography_id === region.code
    );
    this.provinces = filterValue;
    this.regionValue = region.name;
    this.provinceValue = filterValue[0].name_th;
  }
}
