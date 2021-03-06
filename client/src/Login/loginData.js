import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

let baseUrl = "/api/login";
let baseuserUrl = "/api/user";

let createUser = function(username, password, zip)
{
  return {username: username, password : password, zip: zip};
}

@inject (HttpClient)
export class LoginData {
  constructor(HttpClient, QS) {
   
  	this.http = HttpClient.configure(x => { x.withHeader('Content-Type', 'application/json') });
  }

  getUser()
  {
    
    return this.http.get(baseuserUrl + "?userid=" + this.getUserId())
            .then(function(response){
               return response.body;       
            });

  }
  getUserId()
  {
    return window.userid;
  }

  isCurrentLoggedIn()
  {
  	return !!window.userid;
  }

  logIn(username, password) {
    var user = createUser( username, password, '');
     //
     return this.http.post(baseUrl,user)
       			.then(function(response){
              
       				console.log("response body: " +  JSON.stringify(response.content));
       			
       				var newuser = response.content;
              window.userid = newuser._id;

              if (response.isSuccess)
                {
                  console.log("Success. Id is " + window.userid );
                  return newuser }
              else
              {
                return null;
              }
       				
    				});
  }	

  logOut()
  {
     window.userid = null;
  }
  
  signupUser(username, password, zip)
  {
     var user = createUser(username, password, zip);
    var request = this.http.createRequest();
    request.asPost()
               .withUrl(baseuserUrl)
               .withHeader("Accept", "application/json")
               .withHeader("Content-Type", "application/json")
               .withContent(user);

        return request.send().then(function(response) {
           return response.body;
        });
  }
  
}