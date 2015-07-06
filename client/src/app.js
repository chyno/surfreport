import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import {Redirect} from 'aurelia-router';
import {HttpClient} from 'aurelia-http-client';

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

@inject(HttpClient)
class AuthorizeStep {

  constructor(http){
    this.http = http;
  }
  
   url = '/api/loginCheck';
  run(routingContext, next) {
    // Check if the route has an "auth" key
    // The reason for using `nextInstructions` is because
    // this includes child routes.
    ///loginCheck
    if (routingContext.nextInstructions.some(i => i.config.auth)) {
      var isLoggedIn = true;  /* insert magic here */
      if (!isLoggedIn) {
        return next.cancel(new Redirect('admin'));
      }
    }

    return next();
  }
}
