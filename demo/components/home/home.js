import {Component, View} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {Inject} from 'angular2/di';

@Component({
  selector: 'home'
})
@View({
  templateUrl: 'demo/components/home/home.html'
})
class Home {
    constructor(router) {
        this.router = router;
    }

    hello(name) {
        this.router.navigate('/' + name); 
    }
}
// mop: well...see https://github.com/shuhei/babel-plugin-angular2-annotations and https://github.com/babel/babel/issues/1301
Inject(Router)(Home, null, 0);

export default Home;
