import addToDom from './add_to_dom';
import {subtract} from './math';
import * as math from './math'
// import str, {subtract} from './math'; 
//This is what the default is

console.log('Math:', math);

addToDom('h3', `52 - 10 = ${subtract(52,10)}`);
