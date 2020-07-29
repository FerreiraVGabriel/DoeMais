import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { RouterExtensions, PageRoute } from "nativescript-angular/router";
import { Page, ShowModalOptions } from "ui/page";
import { TextField } from "@nativescript/core/ui/text-field/text-field";
import { Item } from "~/data/item.model";
import { DataService } from "~/data/data";
import { switchMap } from "rxjs/operators";
import { Donations } from "../data/donations";

@Component({
    selector: "Payment",
    moduleId: module.id,
    templateUrl: "./payment.component.html",
    styleUrls: ['./payment.component.css']
})

export class PaymentComponent implements OnInit {
    applicationSettings = require("application-settings");
    item: Item;
    items: Array<Item>;
    user: Array<Donations>=[];
    userOne: Donations;

    @ViewChild('valor', {static: false}) valorfield: ElementRef;
    @ViewChild('numcartao', {static: false}) numcartaofield: ElementRef;
    @ViewChild('validade', {static: false}) validadefield: ElementRef;
    @ViewChild('cvv', {static: false}) cvvfield: ElementRef;
    @ViewChild('nome', {static: false}) nomefield: ElementRef;
    @ViewChild('cpf', {static: false}) cpffield: ElementRef;

    

    constructor(private routerExtensions: RouterExtensions, private page: Page, 
        private dataService: DataService, private pageRoute: PageRoute) {
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
        this.userOne = new Donations();
        this.userOne.Data="";
        this.userOne.Dinheiro="";
        this.userOne.Instituicao="";
        this.userOne.Tipo="";
        this.userOne.TipoTag="";
        this.userOne.IdUsuario=0;
        var id = this.applicationSettings.getString("Id");
        this.items = this.dataService.getItems();
        
        this.pageRoute.activatedRoute.pipe(
            switchMap(activatedRoute => activatedRoute.params)
        ).forEach((params) => {           
            this.item = this.items.filter(item => item.id == id)[0];
        });
    }

    onCloseTap(): void {
        this.routerExtensions.back();
    }

    onEmailSend(event): void {
        console.log(`Tapped on ${event}`);
    }

  openModal(): void 
    {
        let passField: TextField = this.valorfield.nativeElement;
        let valor = passField.text;
        let passField2: TextField = this.numcartaofield.nativeElement;
        let numCartao = passField2.text;
        let passField3: TextField = this.validadefield.nativeElement;
        let validade = passField3.text;
        let passField4: TextField = this.cvvfield.nativeElement;
        let cvv = passField4.text;
        let passField5: TextField = this.nomefield.nativeElement;
        let nome = passField5.text;
        let passField6: TextField = this.cpffield.nativeElement;
        let cpf = passField6.text;
        if(valor != null && nome != "" && numCartao != "" && validade != null && cvv != null  && cpf != null)
        {
            var currentDate = new Date();
            var day = currentDate.getDate();
            var month = currentDate.getMonth() + 1;
            var year = currentDate.getFullYear();
            var data =  day + "/" + month + "/" + year;
        
        
        
            let passField: TextField = this.valorfield.nativeElement;
            let retorno = (this.applicationSettings.getString("user6"));
            if(retorno != undefined)
            {
                this.user = JSON.parse(retorno);
            }
            this.userOne.Data = data;
            this.userOne.Dinheiro = passField.text;
            this.userOne.Instituicao = this.item.name;
            this.userOne.Tipo = this.item.category;
            this.userOne.TipoTag = this.item.categoryTag;
            this.userOne.IdUsuario = (this.applicationSettings.getString("IdUsuario"));
            this.user.push(this.userOne);
            this.applicationSettings.setString("user6", JSON.stringify(this.user));
        
            alert
            ({
                title: "OBRIGADO!",
                message: "O ato de doar-se significa ajudar o próximo, faze-lo feliz de alguma forma, por mais simples que seja sua ação. A cada ajuda,um mérito próprio.",
                okButtonText: "Voltar"
            });
        
              
              this.routerExtensions.navigate(["home/", {
            }]);
        }
      else
      {
        alert({
            title: "Doação Invalida",
            message: "Favor preencher todos os campos!",
            okButtonText: "Voltar"
          });
      }
   
    }

    
}
