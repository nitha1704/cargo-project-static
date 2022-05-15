import { Component, OnInit, HostListener } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { AuthService } from "src/app/custom/services/auth.service";
import { ApiService } from "src/app/custom/services/api.service";

@Component({
  selector: "app-admin-layout",
  templateUrl: "./admin-layout.component.html",
  styleUrls: ["./admin-layout.component.scss"],
})
export class AdminLayoutComponent implements OnInit {
  baseUrl: string = this.apiService.baseUrl;
  isMobileResolution: boolean;
  hasUserAdmin: boolean = true;
  userInfo: any;

  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthService,
    private apiService: ApiService
  ) {
    if (window.innerWidth < 1200) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
  }
  @HostListener("window:resize", ["$event"])
  isMobile(event) {
    if (window.innerWidth < 1200) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
  }

  ngOnInit() {
    // this.subscribeGlobalUserInfo();
    // this.getUserAdmin();
    this.getUserAdminStatic();
  }

  getUserAdmin() {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      const httpHeadersValue = new HttpHeaders({
        "content-type": "application/json",
        Authorization: `Token ${accessToken}`,
      });
      this.http
        .get<any>(`${this.baseUrl}/api/user/`, {
          headers: httpHeadersValue,
        })
        .subscribe(
          (res) => {
            this.hasUserAdmin = true;
            this.authService.userInfo.next(res);
            console.log(res);
          },
          (err) => {
            console.log(err, err.error.detail);
            this.hasUserAdmin = false;
            this.router.navigate([""]);
          }
        );
    } else {
      this.hasUserAdmin = false;
      this.router.navigate([""]);
    }
  }

  subscribeGlobalUserInfo() {
    this.authService
      .getUserInfo()
      .subscribe((value) => (this.userInfo = value));
  }

  getUserAdminStatic() {
    const userInfo = {
      id: 1,
      first_name: "admin",
      last_name: "",
      username: "admin",
      email: "admin@hotmail.com",
      is_staff: true,
      extendeduser: {
        gender: null,
        line: null,
        facebook: null,
        affiliateName: null,
        birthDate: "1990-01-01",
        referralCode: "",
        shippingAddressId: 201,
        billingAddressId: 201,
        uuid: "3b988fca-65ef-491e-a4f9-57a8f71f6f73",
        has_consent: true,
        consent_date: "2022-04-21T20:04:05.352934Z",
        line_notify: false,
      },
      socials: {
        facebook: null,
        google: null,
        line: null,
      },
    };

    this.hasUserAdmin = true;
    this.authService.userInfo.next(userInfo);
  }
}
