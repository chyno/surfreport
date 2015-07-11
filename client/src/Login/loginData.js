import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

let baseUrl = "/api/login";

@inject (HttpClient)
export class LoginData {
  constructor(HttpClient) {
  	this.http = HttpClient.configure(x => { x.withHeader('Content-Type', 'application/json') });
  }

  
  isCurrentLoggedIn()
  {
  	return !!window.isLoggedIn;
  }

  logIn(user) {
      user.zip = '';
       return this.http.post(baseUrl,user)
       			.then(function(response){
              user.zip = '22207';
       				console.log("response body: " + response.content);
       				console.log("is isSuccess: " + response.isSuccess);
       				
              window.isLoggedIn = response.isSuccess;

              if (window.isLoggedIn)
                {return user}
              else
              {
                return null;
              }
       				
    				});
  }	

  logOut()
  {
     window.isLoggedIn = null;
  }
  
}