import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "./home/home.component";
import { DetailComponent } from "./detail/detail.component";
import { PaymentComponent } from "./payment/payment.component";
import { CategoryComponent } from "./category/category.component";
import { CompanyComponent } from "./company/company.component";
import { EmployeeComponent } from "./employee/employee.component";
import { UserComponent } from "./user/user.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";


const routes: Routes = [
     //{ path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "", redirectTo: "/sign-in", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "detail/:id", component: DetailComponent },
    { path: "payment", component: PaymentComponent },
    { path: "category", component: CategoryComponent },
    { path: "company", component: CompanyComponent },
    { path: "user", component: UserComponent },
    { path: "employee", component: EmployeeComponent },
    { path: "sign-in", component: SignInComponent},
    { path: "sign-up", component: SignUpComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
