import {inject} from 'aurelia-framework';
import {computedFrom} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

let url = "/api/latestreading";
//let url = "readingsData";

let clearFields = function(reading) {
  reading.city = '';
  reading.speed = '';
  reading.direction = '';
  reading.reading = '';
  reading.zip = '';
}

@inject(HttpClient)
export class Reading{
  heading = 'Latest Reading';
  city = '';
  speed = '';
  direction = '';
  reading = '';
  zip = '';
 
  constructor(http){
    this.http = http;
  }
 
  canDeactivate() {
   return true;
    }
  
  activate() {
    clearFields(this);
    return this.http.get(url).then(response => {
      this.zip = "22207";
      this.city = response.content.city;
      this.speed = response.content.speed;
      this.direction = response.content.direction;
      this.reading = response.content.reading;

    });

  }
}

export class UpperValueConverter {
  toView(value){
    return value && value.toUpperCase();
  }
}
