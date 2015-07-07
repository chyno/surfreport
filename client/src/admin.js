import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Admin{
  url = '/api/login';
  //{ id: 1, username: 'bob', password: 'secret', email: 'bob@example.com' }
   username = '';
   password = '';
   loginmessage = 'not logged in';
   self = this;
  logIn(){
    var user = { id: 1, username: this.username, password: this.password, email: 'bob@example.com' };
    this.http.post(this.url,user).then(function(response){
       console.log("response body: " + response.content)
       if (response.content === 'true')
        {   self.loginmessage = 'Logged In'; }
    })
     
  }

   

  constructor(http){
    this.http = http.configure(x => { x.withHeader('Content-Type', 'application/json') });
  }

     

  activate(){
        
  }
}
