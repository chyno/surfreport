import {inject} from 'aurelia-framework';
import {computedFrom} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Welcome{
  heading = ' Latest Reading';
  city = '';
  speed = '';
  direction = '';
  reading = '';
  url = '/api/readings';

  constructor(http){
    this.http = http;
  }
  //Getters can't be observed with Object.observe, so they must be dirty checked.
  //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  //To optimize by declaring the properties that this getter is computed from, uncomment the line below.
  //@computedFrom('firstName', 'lastName')
   

  canDeactivate() {
   return true;
    }
  
  activate() {
   
    return this.http.get(this.url).then(response => {
       
      this.city = response.content[0].city;
      this.speed = response.content[0].speed;
      this.direction = response.content[0].direction;
      this.reading = response.content[0].reading;

    
    });

  }
}


export class UpperValueConverter {
  toView(value){
    return value && value.toUpperCase();
  }
}
