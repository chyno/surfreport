import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Admin{
  username = '';
  hash = '';
   

  constructor(http){
    this.http = http;
  }

  logIn(){
    var user = {
    "username": this.username,
    "password": this.hash
     
  }
     alert('logging in for: ' + this.username);
  }

  

  activate(){
        
  }
}
