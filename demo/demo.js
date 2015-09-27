import {bootstrap as ngBootstrap, Component, View, bind} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_BINDINGS, LocationStrategy, HashLocationStrategy, HTML5LocationStrategy} from 'angular2/router';
import Home from 'demo/components/home/home.js';
import Hello from 'demo/components/hello/hello.js';

@View({
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'demo/demo.html',
})
@Component({
  selector: 'demo-app'
})
@RouteConfig([
  { path: '/', component: Home, as: 'home' },
  { path: '/:name', component: Hello, as: 'hello'}
])
class Demo {
}

export default Demo;
export function bootstrap() {
    ngBootstrap(Demo, [ROUTER_BINDINGS, bind(LocationStrategy).toClass(HashLocationStrategy)]);
}
