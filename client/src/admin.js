import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Admin{
  url = '/api/login';
  //{ id: 1, username: 'bob', password: 'secret', email: 'bob@example.com' }
   username = '';
   password = '';
  
 
  logIn(){
    self.loginmessage = '... Logging in';
    var user = { id: 1, username: this.username, password: this.password, email: 'bob@example.com' };
    this.http.post(this.url,user).then(function(response){
       console.log("response body: " + response.content)
       if (response.content === 'true')
        {  
         
           window.user = user;
           self.loginmessage = 'Logged In';

        }
        else
        {
           window.user = null;
            self.loginmessage = 'Log in falied';
        }
    })
     
  }

  constructor(http){
    self = this;
    this.loginmessage = 'not logged in';
    this.http = http.configure(x => { x.withHeader('Content-Type', 'application/json') });
  }
  
  activate(){      
  }
}
