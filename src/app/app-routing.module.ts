import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { CommonModule } from "@angular/common"
import { BrowserModule } from "@angular/platform-browser"

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { PurchaseComponent } from "./custom/pages/purchase/purchase.component";
import { CartComponent } from "./custom/pages/cart/cart.component";
import { OrderdetailComponent } from "./custom/pages/orderdetail/orderdetail.component";
import { TrackingComponent } from "./custom/pages/tracking/tracking.component";
import { TrackingDetailsComponent } from './custom/pages/tracking-details/tracking-details.component';
import { LoginComponent } from "./custom/pages/login/login.component";
import { RegisterComponent } from "./custom/pages/register/register.component";
import { CheckoutComponent } from "./custom/pages/checkout/checkout.component";
import { AccountComponent } from "./custom/pages/account/account.component";
import { FaqComponent } from "./custom/pages/faq/faq.component";
import { ConditionsComponent } from "./custom/pages/faq/faq-children-pages/conditions/conditions.component";
import { HowToCalculateComponent } from "./custom/pages/faq/faq-children-pages/how-to-calculate/how-to-calculate.component";
import { StorageFeeComponent } from "./custom/pages/faq/faq-children-pages/storage-fee/storage-fee.component";
import { InvoiceComponent } from "./custom/pages/faq/faq-children-pages/invoice/invoice.component";
import { DeliveryComponent } from "./custom/pages/faq/faq-children-pages/delivery/delivery.component";
import { StatusComponent } from "./custom/pages/faq/faq-children-pages/status/status.component";
import { GoodsTypeComponent } from "./custom/pages/faq/faq-children-pages/goods-type/goods-type.component";
import { GoodsTypeSpecialComponent } from "./custom/pages/faq/faq-children-pages/goods-type-special/goods-type-special.component";
import { PalletComponent } from "./custom/pages/faq/faq-children-pages/pallet/pallet.component";
import { ExchangeComponent } from "./custom/pages/faq/faq-children-pages/exchange/exchange.component";
import { ProfileComponent } from "./custom/pages/profile/profile.component";
import { WarehouseAddressComponent } from "./custom/pages/overview/warehouse-address/warehouse-address.component";
import { InternationalShippingRateComponent } from "./custom/pages/overview/international-shipping-rate/international-shipping-rate.component";
import { DomesticShippingRateComponent } from "./custom/pages/overview/domestic-shipping-rate/domestic-shipping-rate.component";
import { TermsAndConditionsComponent } from "./custom/pages/terms-and-conditions/terms-and-conditions.component";
import { MockupCartDataPageComponent } from "./custom/pages/cart/mockup-cart-data-page/mockup-cart-data-page.component";
import { CreateParcelComponent } from "./custom/pages/parcel-delivery/create-parcel/create-parcel.component";
import { ParcelDetailsComponent } from "./custom/pages/parcel-delivery/parcel-details/parcel-details.component";
import { ParcelListComponent } from "./custom/pages/parcel-delivery/parcel-list/parcel-list.component";
import { ConfirmParcelComponent } from "./custom/pages/parcel-delivery/confirm-parcel/confirm-parcel.component";
import { AllItemsComponent } from "./custom/pages/all-items/all-items.component";
import { GoodsConfirmComponent } from "./custom/pages/goods-confirm/goods-confirm.component";
import { TransportPaymentComponent } from "./custom/pages/transport-payment/transport-payment.component";
import { CreateBillComponent } from "./custom/pages/transport-payment/create-bill/create-bill.component";
import { BillsComponent } from "./custom/pages/transport-payment/bills/bills.component";
import { BillDetailComponent } from "./custom/pages/transport-payment/bill-detail/bill-detail.component";
import { FindProductComponent } from "./custom/pages/find-product/find-product.component";
import { CreateExchangeComponent } from "./custom/pages/exchange-money/create-exchange/create-exchange.component"
import { PendingPaymentListComponent } from "./custom/pages/pending-payment-list/pending-payment-list.component";
import { PaymentNoticeComponent } from "./custom/pages/payment-notice/payment-notice.component";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "web",
    component: AdminLayoutComponent,
    children: [
      { path: "warehouse-address", component: WarehouseAddressComponent },
      {
        path: "international-shipping-rate",
        component: InternationalShippingRateComponent,
      },
      {
        path: "domestic-shipping-rate",
        component: DomesticShippingRateComponent,
      },
      {
        path: "international-shipping-rate",
        component: WarehouseAddressComponent,
      },
      { path: "domestic-shipping-rate", component: WarehouseAddressComponent },
      { path: "account", component: AccountComponent },
      { path: "purchase", component: PurchaseComponent },
      { path: "cart", component: CartComponent },
      { path: "checkout", component: CheckoutComponent },
      { path: "orderdetail", component: OrderdetailComponent },
      { path: "tracking", component: TrackingComponent },
      { path: "tracking-details", component: TrackingDetailsComponent },
      { path: "profile", component: ProfileComponent },
      { path: "create-parcel", component: CreateParcelComponent },
      { path: "parcel-details", component: ParcelDetailsComponent },
      { path: "parcel-list", component: ParcelListComponent },
      { path: "confirm-parcel", component: ConfirmParcelComponent },
      { path: "goods-confirm", component: GoodsConfirmComponent },
      { path: "all-items", component: AllItemsComponent },
      { path: "find-product", component: FindProductComponent },
      { path: "create-exchange", component: CreateExchangeComponent },
      { path: "pending-payment-list", component: PendingPaymentListComponent },
      { path: "payment-notice", component: PaymentNoticeComponent },
      // Pending transport-payment
      { path: "transport-payment", component: TransportPaymentComponent },
      { path: "create-bill", component: CreateBillComponent },
      { path: "bills", component: BillsComponent },
      { path: "bills/:bill-number", component: BillDetailComponent },
      // Mockup data for test
      { path: "mockup-data", component: MockupCartDataPageComponent },
      // Page not Found
      { path: "", redirectTo: "profile", pathMatch: "full" },
    ],
  },
  {
    path: "faq",
    component: FaqComponent,
    children: [
      { path: "conditions", component: ConditionsComponent },
      { path: "how-to-calculate", component: HowToCalculateComponent },
      { path: "storage-fee", component: StorageFeeComponent },
      { path: "invoice", component: InvoiceComponent },
      { path: "delivery", component: DeliveryComponent },
      { path: "status", component: StatusComponent },
      { path: "goods-type", component: GoodsTypeComponent },
      { path: "goods-type-special", component: GoodsTypeSpecialComponent },
      { path: "pallet", component: PalletComponent },
      { path: "exchange", component: ExchangeComponent },
      { path: "", redirectTo: "conditions", pathMatch: "full" },
    ],
  },
  {
    path: "terms-and-conditions",
    component: TermsAndConditionsComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      //useHash: true
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
