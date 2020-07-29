import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HomeComponent } from "./home/home.component";
import { PaymentComponent } from "./payment/payment.component";
import { DetailComponent } from "./detail/detail.component";
import { CategoryComponent } from "./category/category.component";
import { CompanyComponent } from "./company/company.component";
import { EmployeeComponent } from "./employee/employee.component";
import { UserComponent } from "./user/user.component";
import { SignInComponent } from "./sign-in/sign-in.component";


import { MaskedTextFieldModule } from "nativescript-masked-text-field/angular";
import { DataService } from "./data/data";
import {NativeScriptHttpClientModule} from "nativescript-angular/http-client"
import { SignUpComponent } from "./sign-up/sign-up.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        MaskedTextFieldModule,
        NativeScriptHttpClientModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        DetailComponent,
        PaymentComponent,
        CategoryComponent,
        CompanyComponent,
        EmployeeComponent,
        UserComponent,
        SignInComponent,
        SignUpComponent
    ],
    providers: [
        DataService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
