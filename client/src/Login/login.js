import {inject} from 'aurelia-framework';
import {LoginData} from './loginData';

let loggingInMessage = "... Logging in";
let loggedInMessage = " is logged In";
let notLoggedInMessage = "not logged In"
let errorMessage = "Log In Failed";

let clearFields = function(login) {
   
    login.username = 'bob';
    login.password = 'secret';
    login.id = -1;
    login.zip = '';
    login.isLoggedIn = false;
}

@inject(LoginData)
export class Login{
  //{ id: 1, username: 'bob', password: 'secret', email: 'bob@example.com' }
    
    username = '';
    password = '';
    id = -1;
    zip = '';
    isLoggedIn = false;
 
  logIn(){
    var self = this;
    this.loginmessage = loggingInMessage;
    
    this.loginData
    .logIn(this.username, this.password)
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
        clearFields(this);
        self.loginmessage = 'exception';
      });                   
  }

  logOut(){
    clearFields(this);
    this.loginmessage = notLoggedInMessage;
    this.loginData.logOut(); 
  }

  constructor(loginData){
     this.loginData = loginData;
  }
  
  activate(){ 
    clearFields(this);
    this.isLoggedIn =  this.loginData.isCurrentLoggedIn();        
    if (this.isLoggedIn)
    {
       this.loginmessage =  this.username + loggedInMessage; 
    }
    else
    {
      this.loginmessage = notLoggedInMessage;
    }
  }
}
