import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validator } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { ApiService } from "src/app/custom/services/api.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {
  SocialAuthService,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angularx-social-login";
import liff from "@line/liff/dist/lib";
@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  baseUrl: string = this.apiService.baseUrl;
  liffId: any = "1656798245-1XOVnk67";
  userForm1: FormGroup;
  userForm2: FormGroup;
  userInfo: any;
  bsValue: any;

  isDateValid: boolean = true;
  isUpdateSuccess: boolean;
  modalBoxMsg: string;

  isDisplayAddAddress: boolean = false;
  isDisplayHomeAddress: boolean = false;
  isDisplayOfficeAddress: boolean = false;
  isDisplayCondomeniumAddress: boolean = false;

  constructor(
    private authService: AuthService,
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private socialAuthService: SocialAuthService
  ) {}

  ngOnInit(): void {
    this.isLineLogin();
    this.subscribeGlobalUserInfo();
    this.userForm1Init();
    this.userForm2Init();

    console.log(this.userInfo)
  }

  subscribeGlobalUserInfo(): void {
    this.authService
      .getUserInfo()
      .subscribe((value) => (this.userInfo = value));
  }

  userForm1Init(): void {
    this.userForm1 = this.formBuilder.group({
      first_name: [this.userInfo ? this.userInfo.first_name.trim() : ""],
      last_name: [this.userInfo ? this.userInfo.last_name : ""],
      email: [this.userInfo ? this.userInfo.email : ""],

      extendeduser: this.formBuilder.group({
        birthDate: [new Date(this.userInfo.extendeduser?.birthDate ?? null)],
        address: [""],
        city: [""],
        country: [""],
        postcode: [""],
        billAddress: [""],
      }),
    });
  }

  userForm2Init(): void {
    this.userForm2 = this.formBuilder.group({
      extendeduser: this.formBuilder.group({
        telephone: [this.userInfo.extendeduser?.telephone],
        google: [this.userInfo.extendeduser?.google],
        facebook: [this.userInfo.extendeduser?.facebook],
        line: [this.userInfo.extendeduser?.line],
        affiliateName: [this.userInfo.extendeduser?.affiliateName],
        referralCode: [this.userInfo.extendeduser?.referralCode],
      }),
    });
  }

  handleSubmitUserForm1(): void {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      const httpHeadersValue = new HttpHeaders({
        "content-type": "application/json",
        Authorization: `Token ${accessToken}`,
      });

      const dateValue = Date.parse(this.userForm1.value.extendeduser.birthDate);
      let dateValue2;
      const isNan: any = () => {
        if (isNaN(dateValue)) {
          dateValue2 = "Date Invalid";
          this.isDateValid = false;
        } else {
          const tzoffset = new Date().getTimezoneOffset() * 60000;
          const dateValueISO = new Date(dateValue - tzoffset)
            .toISOString()
            .split("T")[0];
          dateValue2 = dateValueISO;
        }
      };
      isNan();

      const userForm1Value = {
        ...this.userForm1.value,
        first_name: this.userForm1.value["first_name"].replace(/\s/g, ""),
        last_name: this.userForm1.value["last_name"].replace(/\s/g, ""),
        email: this.userForm1.value["email"].replace(/\s/g, ""),
        extendeduser: {
          birthDate: dateValue2,
        },
      };

      this.http
        .put<any>(`${this.baseUrl}/api/user/`, userForm1Value, {
          headers: httpHeadersValue,
        })
        .subscribe(
          (res) => {
            this.isDateValid = true;
            this.isUpdateSuccess = true;
            this.modalBoxMsg = "โปรไฟล์ของคุณอัพเดทเรียบร้อยแล้ว";
            this.goToModalBox();
          },
          (err) => {
            console.log(err);
            this.isUpdateSuccess = false;
            this.modalBoxMsg =
              "อัพเดทโปรไฟล์ไม่สำเร็จ กรุณาตรวจสอบความถูกต้องของข้อมูล";
            this.goToModalBox();
          }
        );
    }
  }

  handleSubmitUserForm2(): void {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      const httpHeadersValue = new HttpHeaders({
        "content-type": "application/json",
        Authorization: `Token ${accessToken}`,
      });

      const userForm2Value = {
        extendeduser: {
          ...this.userForm2.value.extendeduser,
        },
      };

      this.http
        .put<any>(`${this.baseUrl}/api/user/`, userForm2Value, {
          headers: httpHeadersValue,
        })
        .subscribe(
          (res) => {
            this.isUpdateSuccess = true;
            this.modalBoxMsg = "โปรไฟล์ของคุณอัพเดทเรียบร้อยแล้ว";
            this.goToModalBox();
          },
          (err) => {
            console.log(err);
            this.isUpdateSuccess = false;
            this.modalBoxMsg =
              "อัพเดทโปรไฟล์ไม่สำเร็จ กรุณาตรวจสอบความถูกต้องของข้อมูล";
            this.goToModalBox();
          }
        );
    }
  }

  goToModalBox(): void {
    const modalBox: any = document.querySelector(".update-profile-modal-box");
    modalBox.classList.add("active");

    const modalBoxPosition =
      modalBox.getBoundingClientRect().top + window.scrollY;
    window.scroll({
      top: modalBoxPosition - 70,
      behavior: "smooth",
    });

    setTimeout(() => {
      modalBox.classList.add("sticky");
    }, 1000);
  }

  closeModalBox(): void {
    const modalBox: any = document.querySelector(".update-profile-modal-box");
    modalBox.classList.remove("sticky");
    modalBox.classList.remove("active");
  }

  connectBtcSocials(authToken: any, provider: string, idToken: any) {
    const accessToken = localStorage.getItem("accessToken");
    const httpHeadersValue = new HttpHeaders({
      "content-type": "application/json",
      Authorization: `Token ${accessToken}`,
    });

    if (provider === "google") {
      this.http
        .post<any>(
          `${this.baseUrl}/api/auth/google`,
          {
            access_token: authToken,
          },
          { headers: httpHeadersValue }
        )
        .subscribe(
          (res) => {
            alert("เชื่อมต่อสำเร็จ");
            this.updateUser();
          },
          (err) => {
            console.log(err);
            alert("เชื่อมต่อไม่สำเร็จ");
          }
        );
    }

    if (provider === "facebook") {
      this.http
        .post<any>(
          `${this.baseUrl}/api/auth/facebook`,
          {
            access_token: authToken,
          },
          { headers: httpHeadersValue }
        )
        .subscribe(
          (res) => {
            alert("เชื่อมต่อสำเร็จ");
            this.updateUser();
          },
          (err) => {
            console.log(err);
            alert("เชื่อมต่อไม่สำเร็จ");
          }
        );
    }

    if (provider === "line") {
      this.http
        .post<any>(
          `${this.baseUrl}/api/auth/line`,
          {
            access_token: authToken,
            id_token: idToken,
          },
          { headers: httpHeadersValue }
        )
        .subscribe(
          (res) => {
            alert("เชื่อมต่อสำเร็จ");
            this.lineLogout();
            this.updateUser();
          },
          (err) => {
            console.log(err);
            alert("เชื่อมต่อไม่สำเร็จ");
          }
        );
    }
  }

  connectGoogle(): void {
    this.socialAuthService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((res) => {
        const authToken = res.authToken;
        this.connectBtcSocials(authToken, "google", "");
      })
      .catch((err) => {
        console.log(err);
        alert("เชื่อมต่อไม่สำเร็จ");
      });
  }

  connectFacebook(): void {
    this.socialAuthService
      .signIn(FacebookLoginProvider.PROVIDER_ID)
      .then((res) => {
        const authToken = res.authToken;
        this.connectBtcSocials(authToken, "facebook", "");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Line Connect Functions
  connectLine(): void {
    liff.init(
      { liffId: this.liffId },
      () => {
        liff.login();
      },
      (err) => {
        console.error(err);
      }
    );
  }
  isLineLogin(): void {
    liff.init({ liffId: this.liffId }, () => {
      if (liff.isLoggedIn()) {
        this.runApp();
      }
    });
  }
  runApp(): void {
    const idToken = liff.getIDToken();
    const accessTokenLine = liff.getAccessToken();
    this.connectBtcSocials(accessTokenLine, "line", idToken);
  }
  lineLogout(): void {
    liff.logout();
  }

  updateUser(): void {
    const accessToken = localStorage.getItem("accessToken");
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
          this.authService.userInfo.next(res);
        },
        (err) => {
          console.log(err, err.error.detail);
          alert("มีข้อผิดพลาดในการเชื่อมต่อเกิดขึ้น");
        }
      );
  }
}
