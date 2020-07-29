import { Component, OnInit} from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { DataService } from "../data/data";
import { Page } from "ui/page";
import { PageRoute } from "nativescript-angular/router";
import { Donations } from "~/data/donations";


@Component({
    selector: "User",
    moduleId: module.id,
    templateUrl: "./user.component.html",
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
    applicationSettings = require("application-settings");
    user: Array<Donations>=[];
    userNow: Array<Donations>=[];
    valor = "Dinheiro doado: R$ 00,00";
    numDoacao = "Número de doações: 0";
    userOne: Donations;
    welcome="";

    constructor(private routerExtensions: RouterExtensions, private dataService: DataService, private page: Page, private pageRoute: PageRoute) {
        //Set up to get data from shared service to help moving from mocking data to real API calls in the future
        //this.page.actionBarHidden = true;
 
    }

    ngOnInit(): void {
        let nome = (this.applicationSettings.getString("Nome"));
        this.welcome = "Bem vindo(a) ao perfil do usuário "+ nome.replace(/"/g, ''); 
        let retorno = (this.applicationSettings.getString("user6"));
        if(retorno == undefined)
        {
            this.valor = "Dinheiro doado: R$ 00,00";
            this.numDoacao = "Número de doações: 0";
        }
        else
        {
            this.user = JSON.parse(retorno);
            var Id = (this.applicationSettings.getString("IdUsuario"));
            for (var numero in this.user) {
                if(this.user[numero].IdUsuario == Id ){
                    this.userNow.push(this.user[numero]);
                }
            }

            var resultado =0;
             var num  =this.userNow.length;
             this.numDoacao = "Número de doações:"+ num; 
             for(var userone in this.userNow) {
                var x = this.userNow[userone].Dinheiro;
                var y = x.split(" ");
                var g = y[1];
                var h = g.split(".");
                var mil = h[0];
                var real = h[1];
                var dinheiro = mil + real;
                var dinheiroInt = parseInt(dinheiro);
                var resultado = resultado + dinheiroInt;
            }
            this.valor = "Dinheiro doado: R$"+ resultado;
        }
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


   
}
