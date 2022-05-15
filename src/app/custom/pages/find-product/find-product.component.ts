import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/custom/services/api.service";
import { CartService } from "src/app/custom/services/cart.service";
import { CartData } from "../../interfaces/cart";

@Component({
  selector: "app-find-product",
  templateUrl: "./find-product.component.html",
  styleUrls: ["./find-product.component.scss"],
})
export class FindProductComponent implements OnInit {
  isLoading: boolean = true;
  cartData: CartData[] = [];
  totalQuantity: Number = 0;

  constructor(
    private cartService: CartService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.getData();
    this.subscribeGlobalVariables();
  }

  subscribeGlobalVariables(): void {
    this.cartService
      .getTotalQuantity()
      .subscribe((value) => (this.totalQuantity = value));
  }

  getData(): void {
    this.apiService.getData().subscribe((value) => {
      const cartData1 = value.map((item: any) => {
        return { ...item, quantity: 1, selected: false };
      });
      const cartData2 = cartData1.map((item: CartData) => {
        return { ...item, totalPrice: item.quantity * item.price };
      });
      this.cartData = cartData2;
      this.isLoading = false;
    });
  }

  addItem(product: CartData): void {
    this.cartService.addItem(product);
  }
}
