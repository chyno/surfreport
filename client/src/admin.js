import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Flickr{
  heading = 'Admin';
  firstName = '';
  lastNameName = '';
  zipCode = '';

  constructor(http){
    this.http = http;
  }

  submit(){
     
  }

 get fullName(){
      return `${this.firstName} ${this.lastName}`;
  }

  activate(){
     this.firstName = '';
     this.lastNameName = '';
     this.zipCode = '';     
  }
}
