// const earnMoney=()=>{
//     return "earn money by learning high demand skills"
// }

// const growMoney=()=>{
//     return "grow money by investing"
// }

// const giveMoney=()=>{
//     return "give money for education free world"
// }
// // any one function default is compile
// export default earnMoney
// export {growMoney,giveMoney}

//or
// -------------------------------------------
// export default function earnMoney() {
//   return "earn money by learning high demand skills";
// }
// -----------------------------------------------------
// export  function earnMoney() {
//   return "earn money by learning high demand skills";
// }

// export const growMoney = () => {
//   return "grow money by investing";
// };

// export const giveMoney = () => {
//   return "give money for education free world";
// };
// -----------------------------------------------------------

export default class Subscriber{
  constructor(name){
    this._name=name;
  }
  emailme(){
    return `Hi I am ${this._name}.emailed to kural@gmail.com`
  }
}

