import {inject} from 'aurelia-framework';
import {computedFrom} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Welcome{
  heading = 'Chyno Surf Reqport Page';
  city = 'Arlington';
  speed = '12';
  direction = 'SW';
  reading = '4/4/2015';

  url = 'http://localhost:3000/api/readings';

  constructor(http){
    this.http = http;
  }
  //Getters can't be observed with Object.observe, so they must be dirty checked.
  //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  //To optimize by declaring the properties that this getter is computed from, uncomment the line below.
  //@computedFrom('firstName', 'lastName')
  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  }

  submit(){
     
  }

  canDeactivate() {
   retun true;
    }
  }
  activate(){
   
    return this.http.get(this.url).then(response => {
       
      city = response.content[0].city;
      speed = response.content[0].speed;
      direction = response.content[0].direction;
      reading = response.content[0].reading;

      //this.lastName = response.content[0].lastName;
    });

  }
}


export class UpperValueConverter {
  toView(value){
    return value && value.toUpperCase();
  }
}

