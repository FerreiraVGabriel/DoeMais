import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";
import { Page } from "ui/page";
import { PageRoute } from "nativescript-angular/router";
import { Item } from "../data/item.model";
import { DataService } from "../data/data";
import { convertString } from "@nativescript/core/utils/utils";

@Component({
    selector: "Detail",
    moduleId: module.id,
    templateUrl: "./detail.component.html",
    styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {
    itemId: number;
    item: Item;
    items: Array<Item>;

    constructor(
        private pageRoute: PageRoute,
        private routerExtensions: RouterExtensions,
        private page: Page,
        private dataService: DataService) {

        this.items = this.dataService.getItems();        

        this.page.actionBarHidden = true;

        this.pageRoute.activatedRoute.pipe(
            switchMap(activatedRoute => activatedRoute.params)
        ).forEach((params) => {
            this.itemId = +params["id"];            
            this.item = this.items.filter(item => item.id == this.itemId)[0];
        });
    }

    ngOnInit(): void {
    }


    toggleHeart(item) {
        item.isFavorite = !item.isFavorite;
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

    onCloseTap(): void {
        this.routerExtensions.back();
    }

    donatePage(itemId) {
        var applicationSettings = require("application-settings");
        var id = itemId.toString();
        applicationSettings.setString("Id", id);
        this.routerExtensions.navigate(["payment/", {
            animated: true,
            transition: {
                name: "slideTop",
                duration: 200,
                curve: "easeIn"
            }
        }]);
    }

}
