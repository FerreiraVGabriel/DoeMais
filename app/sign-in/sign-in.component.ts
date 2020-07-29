import {Component, ViewChild, ElementRef, OnInit, AfterViewInit} from "@angular/core";//decoretor component
import { UtilityService } from '../sign-in/utility.service';
import { TextField } from "tns-core-modules/ui/text-field";
import { Page, booleanConverter } from "tns-core-modules/ui/page/page";
import { FormGroup } from "@angular/forms";
import { User } from "../sign-in/user.model";
import { RouterExtensions } from "nativescript-angular/router";
import { Request } from '../shared/request.model'
import { switchMap } from "rxjs/operators";
import { LoginUser } from "~/data/user";


@Component({
    selector:'sign-in',
    moduleId: module.id,//se n fizer isso da erro,tem q fazer essa configuraçao passar o mudule e o id para funcionar
    templateUrl:'./sign-in.component.html',
    styleUrls:['./sign-in.component.css']
})

export class SignInComponent {

    loginForm: FormGroup;
    @ViewChild('password', {static: false}) passwordField: ElementRef;
    @ViewChild('email', {static: false}) emailField: ElementRef;

    user: User;
    userOne: LoginUser;
    isAuthenticating = false;
    request: Request;
    loginUser: Array<LoginUser>=[];
    
    public hideIcon = String.fromCharCode(0xf070);
    public showIcon = String.fromCharCode(0xf06e);
    public showHideIcon: any;
    private showPassword = false;
    applicationSettings = require("application-settings");
    emailError = "";
    passError = "";
    loginError = "";
    emailHasFocus = false;
    passHasFocus = false;
     utilityService: UtilityService;
    pageRoute: any;
    constructor(
        private page: Page, private routerExtensions: RouterExtensions
        ) {
    }

    ngOnInit(){
        this.page.cssClasses.add("login-page-background");
        this.page.backgroundSpanUnderStatusBar = true;
        this.showHideIcon = this.hideIcon;
        this.user = new User();
        this.user.email = "";
        this.user.password = ""; 
        this.request = new Request

        let retorno = (this.applicationSettings.getString("loginuser"));
        if(retorno == undefined)
        {
            this.userOne.nome = "";
            this.userOne.sobrenome = ""; 
            this.userOne.Login = "";
            this.userOne.Senha = "";
        }
        else
        {
            this.userOne = JSON.parse(retorno);

        }
    }

    login() {
        let passField: TextField = this.emailField.nativeElement;
        let email = passField.text;
        let passField2: TextField = this.passwordField.nativeElement;
        let password = passField2.text;

        if(this.checarLogin() != 0){
            this.user.email = email;
            this.user.password = password;
            this.routerExtensions.navigate(["home/", {
            }]);
            
        }
        else{
            alert({
                title: "Erro Login!",
                message: "Login e Senha Invalidos.",
                okButtonText: "Voltar"
                });
        }

    }
    criarConta(){
        this.routerExtensions.navigate(["sign-up/", {
        }]);
    }

    checarLogin(){
        let passField: TextField = this.emailField.nativeElement;
        let email = passField.text;
        let passField2: TextField = this.passwordField.nativeElement;
        let password = passField2.text;
        let checar =0;
        let nome ="";

        let retorno = (this.applicationSettings.getString("usuarios"));
            if(retorno != undefined)
            {
                this.loginUser = JSON.parse(retorno);
            }
        for (var num in this.loginUser) {
            if(this.loginUser[num].Senha == password && this.loginUser[num].Login == email){
                checar = this.loginUser[num].Id;
                nome = this.loginUser[num].nome+" "+this.loginUser[num].sobrenome;
                this.applicationSettings.setString("IdUsuario", JSON.stringify(checar));
                this.applicationSettings.setString("Nome", JSON.stringify(nome));
            }
        }
        return checar;
    }

}   


