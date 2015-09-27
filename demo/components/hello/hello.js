import {Component, View} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import {RouteParams} from 'angular2/router';

@Component({
  selector: 'hello'
})
@View({
  templateUrl: 'demo/components/hello/hello.html'
})
class Hello {
    constructor(routeParams) {
        this.name = routeParams.params.name;
    }
}

Inject(RouteParams)(Hello, null, 0);

export default Hello;
