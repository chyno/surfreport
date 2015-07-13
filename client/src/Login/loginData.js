import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

let baseUrl = "/api/login";
let baseuserUrl = "/api/user";

let createUser = function(id, username, password, zip)
{
  return {id: id, username: username, password : password, zip: zip};
}

@inject (HttpClient)
export class LoginData {
  constructor(HttpClient) {
  	this.http = HttpClient.configure(x => { x.withHeader('Content-Type', 'application/json') });
  }

  
  isCurrentLoggedIn()
  {
  	return !!window.isLoggedIn;
  }

  logIn(username, password) {
     
       var user = createUser(-1, username, password, '');
     
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
  
  signupUser(username, password, zip)
  {
     var user = createUser(-1, username, password, zip);
    var request = this.http.createRequest();
    request.asPut()
               .withUrl(baseuserUrl)
               .withHeader("Accept", "application/json")
               .withHeader("Content-Type", "application/json")
               .withContent(user);

        return request.send().then(response => response.content);
  }
  
}