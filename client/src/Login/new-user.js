import {inject} from 'aurelia-framework';
import {LoginData} from './loginData';

@inject(LoginData)
export class NewUser {
	username;
	password;
	zip;
    loginMessage;


	constructor(loginData){
     this.loginData = loginData;
    }

	registerUser()
	{
		this.loginData.signUpUser(this.username, this.password, this.zip).
		then(function (isSuccess) {
			if(isSuccess)
			{
				this.loginMessage = 'User has been addded';

			}
			else
			{
				this.loginMessage = 'User already exists';

			}

		});

	}

	activate()
	{
		this.loginMessage = '';
	}
}