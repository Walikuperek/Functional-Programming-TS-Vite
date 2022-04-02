import './style.css'
import {app, appHtml} from "./app"
import {
    dict,
    getCustomerFromCache,
    getCustomerFromCache2,
    is,
    isEven,
    isPositive,
    log,
    logIsEven,
    mltpy,
    pipe,
    sum2
} from "./fn"
import {orderLines, reduceOrderLines} from "./fn/monoids";

// Create html in #app
app.innerHTML = appHtml(`Hello FP with TS`);

log(mltpy(5))
log(sum2(5))
log(logIsEven(5))
log(logIsEven(4))

log(getCustomerFromCache(dict, 1));
log(getCustomerFromCache2(1));

pipe(
    isEven,
    isPositive
)(null)

// log(re)
log(is(isEven, 11))

// Monoids
log(reduceOrderLines(orderLines))
