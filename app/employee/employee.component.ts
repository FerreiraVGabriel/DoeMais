import { Component, OnInit} from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { DataService } from "../data/data";
import { Page } from "ui/page";
import { PageRoute } from "nativescript-angular/router";
import { Employee } from "../data/employee.model";

@Component({
    selector: "Employee",
    moduleId: module.id,
    templateUrl: "./employee.component.html",
})



export class EmployeeComponent implements OnInit {
    
    employee: Array<Employee>;

    constructor(private routerExtensions: RouterExtensions, private dataService: DataService, private page: Page, private pageRoute: PageRoute) {
        //Set up to get data from shared service to help moving from mocking data to real API calls in the future
        //this.page.actionBarHidden = true;
 
    }

    ngOnInit(): void {
        this.employee = this.dataService.getEmployee()
    }


   
}
