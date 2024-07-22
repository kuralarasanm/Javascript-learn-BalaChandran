//Module

// import earnMoney, { giveMoney as give, growMoney as grow } from "./modulefunction.js";

// console.log(earnMoney());
// console.log(grow());
// console.log(give());
// -------------------------------------------------------------
// import * as dh from "./modulefunction.js"
// // console.log(dh.earnMoney());   //error because of default
// console.log(dh.default()); 
// console.log(dh.growMoney());
// console.log(dh.giveMoney());
// -----------------------------------------------------------------
// import * as dh from "./modulefunction.js"
// console.log(dh.earnMoney());
// console.log(dh.growMoney());
// console.log(dh.giveMoney());
// -----------------------------------------------------------------
// import { earnMoney, growMoney, giveMoney } from "./modulefunction.js";

// console.log(earnMoney());
// console.log(growMoney());
// console.log(giveMoney());

// ----------------------------------------------------------------------
// import earnMoney, { growMoney, giveMoney } from "./modulefunction.js";

// console.log(earnMoney());
// console.log(growMoney());
// console.log(giveMoney());
// ---------------------------------------------------------------------

import Subscriber from "./modulefunction.js"

const me=new Subscriber("kuralarasan")

console.log(me.emailme());