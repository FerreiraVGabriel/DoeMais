import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { DataService } from "../data/data";
import { Page } from "ui/page";
import { PageRoute } from "nativescript-angular/router";

import { ScrollView, ScrollEventData } from 'tns-core-modules/ui/scroll-view';
import { View } from 'tns-core-modules/ui/core/view';

@Component({
    selector: "Company",
    moduleId: module.id,
    templateUrl: "./company.component.html",
    //styleUrls: ['./home.component.css']
    // All styles were put inside of app.css so we don't need a home.component.css for now
})

export class CompanyComponent implements OnInit {
    
    constructor(private routerExtensions: RouterExtensions, private dataService: DataService, private page: Page, private pageRoute: PageRoute) {
        //Set up to get data from shared service to help moving from mocking data to real API calls in the future
        this.page.actionBarHidden = true;
 
    }

    ngOnInit(): void {
       
    }

    onScroll(event: ScrollEventData, scrollView: ScrollView, topView: View) {
        // If the header content is still visiible
        // console.log(scrollView.verticalOffset);
        if (scrollView.verticalOffset < 250) {
            const offset = scrollView.verticalOffset / 2;
            if (scrollView.ios) {
                // iOS adjust the position with an animation to create a smother scrolling effect. 
                topView.animate({ translate: { x: 0, y: offset } }).then(() => { }, () => { });
            } else {
                // Android, animations are jerky so instead just adjust the position without animation.
                topView.translateY = Math.floor(offset);
            }
        }
    }

    showEmployee(){
        this.routerExtensions.navigate(["employee/", {
        }]);
    }
   
}
