import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Item } from "../data/item.model";
import { Category } from "../data/category.model";
import { DataService } from "../data/data";
import { Page } from "ui/page";
import { PageRoute } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";

@Component({
    selector: "Category",
    moduleId: module.id,
    templateUrl: "./category.component.html",
    //styleUrls: ['./home.component.css']
    // All styles were put inside of app.css so we don't need a home.component.css for now
})

export class CategoryComponent implements OnInit {
    lastDelY = 0;
    headerCollapsed = false;
    selectedTab = 0;
    selectedTabview = 0;
    items2: Array<Item>;
    items = [];
    //itemsTela: Array<Item>;
    //itemCate: string;
    //item: Item;

    constructor(private routerExtensions: RouterExtensions, private dataService: DataService, private page: Page, private pageRoute: PageRoute) {
        //Set up to get data from shared service to help moving from mocking data to real API calls in the future
        //this.page.actionBarHidden = true;
 
    }

    ngOnInit(): void {
        var items3 = [];
        this.items2 = this.dataService.getItems();
        this.items2.forEach(function(item){
            var applicationSettings = require("application-settings");
            var category = applicationSettings.getString("category");  
            if(item.category.toLowerCase() == category.toLowerCase()){
                items3.push(item); 
            }
          });
          this.items = items3;
    }

    showItem(itemId) {
        console.log(`Tapped on ${itemId}`);
        this.routerExtensions.navigate(["detail/" + itemId, {
            animated: true,
            transition: {
                name: "slideTop",
                duration: 380,
                curve: "easeIn"
            }
        }]);
    }

}
