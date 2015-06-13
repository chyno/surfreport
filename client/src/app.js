import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Chyno Surf Report';
    config.map([
      { route: ['','reading'],  moduleId: './reading',      nav: true, title:'Reading' },
      { route: 'admin',        moduleId: './admin',       nav: true, title:'Administration' },
     
    ]);

    this.router = router;
  }
}
