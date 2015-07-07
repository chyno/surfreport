import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Admin{
  url = '/api/login'
  //{ id: 1, username: 'bob', password: 'secret', email: 'bob@example.com' }
   username = '';
   password = '';
   

  logIn(){
    var user = { id: 1, username: 'bob', password: 'secret', email: 'bob@example.com' };
    this.http.post(this.url,user).then(function(){
       alert('User is logged in');
    })
     
  }

   

  constructor(http){
    this.http = http;
  }

     

  activate(){
        
  }
}
