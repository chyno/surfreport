import {inject} from 'aurelia-framework';
import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import {Redirect} from 'aurelia-router';
import {HttpClient} from 'aurelia-http-client';
import {LoginData} from './loginData';


export class App {
  configureRouter(config, router){
    config.title = 'Chyno Surf Report';
    config.addPipelineStep('authorize', AuthorizeStep);
    config.map([
      { route: ['','reading'],  moduleId: './reading',   nav: true, title:'Reading', auth: true},
      { route: 'admin',        moduleId: './admin',     nav: true, title:'Administration' },
     
    ]);

    this.router = router;
  }

}

@inject(LoginData)
@inject(HttpClient)
class AuthorizeStep {
   url = '/api/loginCheck';

   constructor(loginData,http){
    this.loginData = loginData;
    this.http = http;
  }

  run(routingContext, next) {
    // Check if the route has an "auth" key
    // The reason for using `nextInstructions` is because
    // this includes child routes.
    ///loginCheck
    if (routingContext.nextInstructions.some(i => i.config.auth)) {
      
      if (this.loginData.isCurrentLoggedIn()) {
        console.log("success log in");
        return next();
      }
      else
      {
              console.log("redirecting to admin. aruelia authriize");
              return next.cancel(new Redirect('admin'));
      }       
     }

     return next();
  }
}
