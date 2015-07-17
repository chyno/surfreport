import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {LoginData} from './loginData';

let loggingInMessage = "... Logging in";
let loggedInMessage = " is logged In";
let notLoggedInMessage = "not logged In"
let errorMessage = "Log In Failed";



@inject(LoginData, Router)
export class Login{
  //{ id: 1, username: 'bob', password: 'secret', email: 'bob@example.com' }
    self = this;
    username = '';
    password = '';
    zip = '';
    isLoggedIn = false;
    loginmessage = notLoggedInMessage;
  logIn(){

    this.loginData
    .logIn(this.username, this.password)
    .then(this.setCurrentUser,this.errorGettingUser);                   
  }

  logOut(){
    clearFields(this);
    this.loginmessage = notLoggedInMessage;
    this.loginData.logOut(); 
  }

  constructor(loginData, router){
     this.loginData = loginData;
     this.router = router
  }
  
  activate(){ 
   
          
    if (this.loginData.isCurrentLoggedIn())
    {
      console.log("user logged in.  Get user data");
       this.loginData
      .getUser()
      .then(setCurrentUser,errorGettingUser);     
      
       this.loginmessage =  this.username + loggedInMessage; 
    }
    else
    {
      this.loginmessage = notLoggedInMessage;
    }
  }


  setCurrentUser(err, currentUser) 
  {
   self.loginmessage = self.loggingInMessage;
    console.log("setting  current user.");
    if (currentUser)
         {     
           console.log("is logged in");
          self.zip = currentUser.zip; 
          self.loginmessage =  self.username + loggedInMessage;
        //  let url = self.router.generate("reading", {id: currentUser.zip});
       //   console.log("navigating to: " + url);
          self.isLoggedIn = true;
         //  return self.router.navigate(url);

      }
      else
      {
         console.log("not logged in");
        self.loginmessage = self.errorMessage; 
         self.isLoggedIn = false;
       // return;
      }

  };

  errorGettingUser(error) { 
        console.log(error);
        self.loginmessage = "can not log in user"; 
       
        self.loginmessage = 'exception';
      };
}
