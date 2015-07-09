import {inject} from 'aurelia-framework';
import {LoginData} from './loginData';

let loggingInMessage = "... Logging in";
let loggedInMessage = " is logged In";
let notLoggedInMessage = "not logged In"
let errorMessage = "Log In Failed";

@inject(LoginData)
export class Admin{
  url = '/api/login';
  //{ id: 1, username: 'bob', password: 'secret', email: 'bob@example.com' }
   username = '';
   password = '';
   isLoggedIn = false;
 
  logIn(){
    self.loginmessage = loggingInMessage;
    
    self.loginData.logIn(self.username, self.password)
                  .then(function(isLoggedIn) 
                    {
                      if (isLoggedIn)
                    {   self.loginmessage =  self.username + loggedInMessage; }
                    else
                    { 
                      self.loginmessage = errorMessage;
                    }
                    self.isLoggedIn = isLoggedIn;
                  });                   
  }

  logOut(){
    self.username = '';
    self.password = '';
    self.loginmessage = notLoggedInMessage;
    window.isLoggedIn = null;
     self.isLoggedIn = false;  
  }

  constructor(loginData){
    self = this;
    
    this.loginData = loginData;


  }
  
  activate(){ 
     self.isLoggedIn = !!window.isLoggedIn;     
    if (window.isLoggedIn)
    {
       self.loginmessage =  self.username + loggedInMessage; 
    }
    else
    {
      self.loginmessage = notLoggedInMessage;
    }
  }
}
