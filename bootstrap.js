// mop: angular2 needs the reflect shim to be loaded
import Reflect from 'node_modules/angular2/node_modules/reflect-metadata/Reflect.js';
// mop: without zone.js interpolation won't work (?)
import Zone from 'node_modules/angular2/node_modules/zone.js/lib/zone.js';
import {bootstrap} from 'demo/demo.js';

bootstrap();
