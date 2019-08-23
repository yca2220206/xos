import { XosInstance } from './types/index';
import Xos  from './core/Xos';
import {extend}  from './tools/util';


function createInstance(): XosInstance {
    let xos = new Xos();
    let xosRequest =  Xos.prototype.request.bind(xos);
    return extend(xosRequest, xos) as XosInstance;
}

const xos = createInstance();

export default xos;
