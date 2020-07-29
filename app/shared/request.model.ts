import { request, HttpResponse, getString, getJSON  } from "tns-core-modules/http";

//var constants = require("../utils/constants");

var applicationSettings = require("application-settings");
export class Request {




  //Login do usuario
  login() 
  {
    request({
      url: "https://jsonplaceholder.typicode.com/todos/",
      method: "POST",
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      //content: encodeURI()
    })
    //console.log(x);
    //return x;
  }
  

                


}


