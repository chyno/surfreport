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

  logIn(userName, password) {
       var user = { id: 1, username: userName, password: password, email: 'foo@example.com' };
       return this.http.post(baseUrl,user)
       			.then(function(response){
       				console.log("response body: " + response.content);
       				console.log("is isSuccess: " + response.isSuccess);
       				window.isLoggedIn = response.isSuccess;
       				return response.isSuccess;
    				});
  }	

  logOut()
  {
     window.isLoggedIn = null;
  }
  
}