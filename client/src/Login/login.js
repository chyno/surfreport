import {inject} from 'aurelia-framework';
import {LoginData} from './loginData';

let loggingInMessage = "... Logging in";
let loggedInMessage = " is logged In";
let notLoggedInMessage = "not logged In"
let errorMessage = "Log In Failed";

@inject(LoginData)
export class Admin{
  //{ id: 1, username: 'bob', password: 'secret', email: 'bob@example.com' }
    username = "bob";
    password = "secret";
    zip = "";
    isLoggedIn = false;
 
  logIn(){
    var self = this;
    this.loginmessage = loggingInMessage;
    
    this.loginData
    .logIn({username: this.username, password : this.password})
    .then(function(currentUser) 
      {
       
         if (currentUser)
         {     
          self.zip = currentUser.zip; 
          self.loginmessage =  self.username + loggedInMessage;
        }
         else
        {
          self.loginmessage = errorMessage; 
        }
        self.isLoggedIn = !!currentUser;
      }, 
      function(error) { 
        console.log(error);
        self.loginmessage = 'exception';
      });                   
  }

  logOut(){

    this.username = '';
    this.password = '';
    this.id = -1;
    this.zip = '';

    this.loginmessage = notLoggedInMessage;
    this.loginData.logOut();
    this.isLoggedIn = false;  
  }

  constructor(loginData){
    
    
    this.loginData = loginData;
  }
  
  activate(){ 
    this.isLoggedIn = !!window.isLoggedIn;     
    
    if (window.isLoggedIn)
    {
       this.loginmessage =  this.username + loggedInMessage; 
    }
    else
    {
      this.loginmessage = notLoggedInMessage;
    }
  }
}
