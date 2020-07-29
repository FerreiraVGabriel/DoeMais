import {Component, ViewChild, ElementRef} from "@angular/core";//decoretor component
import { User } from "../sign-in/user.model";
import { TextField } from "tns-core-modules/ui/text-field/text-field";
import { FormGroup } from "@angular/forms";
import { Page } from "tns-core-modules/ui/page/page";
import { LoginUser } from "~/data/user";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector:'sign-up',
    moduleId: module.id,//se n fizer isso da erro,tem q fazer essa configuraçao passar o mudule e o id para funcionar
    templateUrl:'./sign-up.component.html',
    styleUrls:['./sign-up.component.css']
})

export class SignUpComponent{
    loginForm: FormGroup;
     @ViewChild('password', {static: false}) passwordField: ElementRef;
     @ViewChild('email', {static: false}) emailField: ElementRef;
     @ViewChild('name', {static: false}) nameField: ElementRef;
     @ViewChild('lastName', {static: false}) lastNameField: ElementRef;
     @ViewChild('confirmPassword', {static: false}) confirmPasswordField: ElementRef;

    loginUser: Array<LoginUser>=[];
    OneloginUser: LoginUser;
    isAuthenticating = false;
    request: Request;



    passHasFocus = false;
    applicationSettings = require("application-settings");

    constructor(private page: Page, private routerExtensions: RouterExtensions) {
    }

    ngOnInit(): void {
        this.page.cssClasses.add("login-page-background");
        this.OneloginUser = new LoginUser();
        this.OneloginUser.Id=0;
        this.OneloginUser.nome="";
        this.OneloginUser.sobrenome="";
        this.OneloginUser.Login="";
        this.OneloginUser.Senha="";
    }

    cadastrar(){
        let passField: TextField = this.emailField.nativeElement;
        let email = passField.text;
        let passField2: TextField = this.nameField.nativeElement; 
        let name = passField2.text;
        let passField3: TextField = this.lastNameField.nativeElement;
        let lastName = passField3.text;
        let passField4: TextField = this.passwordField.nativeElement;
        let password = passField4.text;
        let passField5: TextField = this.confirmPasswordField.nativeElement;
        let confirmPassword = passField5.text;
        if(email != "" && name != "" && lastName != "" && password != "" && confirmPassword != ""){
            if(password === confirmPassword)
            {
                let retorno = (this.applicationSettings.getString("usuarios"));
                if(retorno != undefined)
                {
                    this.loginUser = JSON.parse(retorno);
    
                }
                if(this.checarLogin() != 1){
                    var num  =this.loginUser.length
                    if (num == undefined){
                        num=1;
                    }
                    else{
                        num = num +1;
                    }
                    this.OneloginUser.Id = num;
                    this.OneloginUser.nome = name;
                    this.OneloginUser.sobrenome = lastName;
                    this.OneloginUser.Login = email;
                    this.OneloginUser.Senha = password;
                    this.loginUser.push(this.OneloginUser);
                    this.applicationSettings.setString("usuarios", JSON.stringify(this.loginUser));
                    alert({
                        title: "Cadastro",
                        message: "Cadastro Realizado com sucesso!",
                        okButtonText: "Voltar"
                    });
                    this.routerExtensions.navigate(["sign-in/", {
                    }]);  
                    
                }
                else{
                    alert({
                        title: "Erro ao Cadastrar!",
                        message: "Login já existe",
                        okButtonText: "Voltar"
                        });
                }
            }
            else
            {
                alert({
                    title: "Senha Invalida",
                    message: "Favor preencher o campo senha igual ao campo confirmar senha",
                    okButtonText: "Voltar"
                  });
            }
            
            
        }
        else{
            alert({
                title: "Cadastro Invalido",
                message: "Favor preencher todos os campos!",
                okButtonText: "Voltar"
              });
        }
    }


     checarLogin(){
        let passField: TextField = this.emailField.nativeElement;
        let email = passField.text;
        let checar =0;

        let retorno = (this.applicationSettings.getString("usuarios"));
            if(retorno != undefined)
            {
                this.loginUser = JSON.parse(retorno);
            }
        for (var num in this.loginUser) {
            if( this.loginUser[num].Login == email){
                checar = 1;
            }
        }
        return checar;
    }
    
}