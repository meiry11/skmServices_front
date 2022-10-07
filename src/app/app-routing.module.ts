import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './pages/address/address.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditAddressComponent } from './pages/edit-address/edit-address.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductsingleComponent } from './pages/productsingle/productsingle.component';
import { ProfileDetailsComponent } from './pages/profile-details/profile-details.component';
import { ShopComponent } from './pages/shop/shop.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home',pathMatch: "full"
  },
  {
    path:'home',component: HomeComponent
  },
  {
    path:'order',component: OrdersComponent
  },
  {
    path:'dashboard',component: DashboardComponent
  },
  {
    path:'cart',component: CartComponent
  },
  {
    path:'checkout',component: CheckoutComponent
  },
  {
    path:'address',component: AddressComponent
  },
  {
    path:'profile-details',component: ProfileDetailsComponent
  },
  {
    path:'login',component: LoginComponent
  },
  {
    path:'signup',component: SignupComponent
  },
  {
    path:'profile-details',component: ProfileDetailsComponent
  },
  {
    path:'forgot-password',component: ForgotPasswordComponent
  },
  {
    path:'edit-adress',component: EditAddressComponent
  },
  {
    path:'product-single',component: ProductsingleComponent
  },
  {
    path:'shop',component: ShopComponent
  }


//   {
//     path: 'Product/:type/:id', component: ProductPageComponent
//   },
//   {
//     path:'**',component: NotFoundComponent
//   }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }