import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  baseUrl: string = "https://btc-uat.beonit.xyz";

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<any>("https://product8-api.netlify.app/product8.json");
  }
}
