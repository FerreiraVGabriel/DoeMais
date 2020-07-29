import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Item } from "../data/item.model";
import { Category } from "../data/category.model";
import { DataService } from "../data/data";
import { Page } from "ui/page";
import { DataItem } from "../data/category.model";


@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    //styleUrls: ['./home.component.css']
    // All styles were put inside of app.css so we don't need a home.component.css for now
})

export class HomeComponent implements OnInit {
    lastDelY = 0;
    headerCollapsed = false;
    selectedTab = 0;
    selectedTabview = 0;
    items: Array<Item>;
    categories: Array<Category>;
    news: Array<DataItem>;
    searching = false;

    constructor(private routerExtensions: RouterExtensions, private dataService: DataService, private page: Page) {
        //Set up to get data from shared service to help moving from mocking data to real API calls in the future
        this.items = this.dataService.getItems();
        this.categories = this.dataService.getCategories();
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
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

   

    categoryIcon(itemCategory) {
        switch (itemCategory) {
            case "Crianças":
                return String.fromCharCode(0xf1ae); //"fa-dollar";
                break;
            case "Especiais":
                return String.fromCharCode(0xf123); //"fa-glass";
                break;
            case "Cancer":
                return String.fromCharCode(0xf0f0); //"fa-user-md";
                break;
            case "Baixa Renda":
                return String.fromCharCode(0xf015); //"fa-users";
                break;
            case "Socialização":
                return String.fromCharCode(0xf0c0); //"fa-users";
                break;
            default:
                return String.fromCharCode(0xf120); //"fa-fire";
                break;
        }
    }

    showCategory(itemCate) {
        console.log(`Tapped on ${itemCate}`);
        var applicationSettings = require("application-settings");
        //var id = itemId.toString();
        applicationSettings.setString("category", itemCate);
         this.routerExtensions.navigate(["category/", {
        }]);
    }

    showCompany(){
        this.routerExtensions.navigate(["company/", {
        }]);
    }

    //NEWS
    Show(){
        // this.news = this.allNews.filter((e) => {
        //     return e.urlToImage && e.title && e.description && e.source.name;
        // });
        this.news = this.dataService.getNews();
    }

    showUser(){
        this.routerExtensions.navigate(["user/", {
        }]);
    }
    //Top nav bar tap methods
    onBellTap() {
    }

    onSearchTap() {
    }

    onPopularTap() {
        this.selectedTabview = 0;
    }

    onCategoryTap() {
        this.selectedTabview = 1;
    }

    onNewsTap() {
        this.selectedTabview = 2;
        this.Show();
    }

    //Bottom nav bar tap methods
    onHomeTap() {
        this.selectedTab = 0;
    }

    onCartTap() {
        this.selectedTab = 1;
    }

    onHistoryTap() {
        //this.selectedTab = 2;
    }

    onAboutTap() {
        //this.selectedTab = 3;
    }

}
