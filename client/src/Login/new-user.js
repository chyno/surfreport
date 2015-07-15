import {inject} from 'aurelia-framework';
import {LoginData} from './loginData';

@inject(LoginData)
export class NewUser {
	username;
	password;
	zip;
    loginMessage = 'Add a new user';


	constructor(loginData){

      this.loginData = loginData;
    }

	registerUser()
	{
		this.loginMessage = "Adding new record ...";
		var self = this;
		this.loginData.signupUser(this.username, this.password, this.zip).
		then(function (responsebody) {
			if(responsebody)
			{
				this.loginMessage = responsebody;

			}
			else
			{
				this.loginMessage = 'Error adding user';

			}

		});

	}

	activate()
	{
		  
	}
}