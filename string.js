//strings
const myvariable="helloworld"

console.log(myvariable);

//length property
console.log(myvariable.length);

//string methods
console.log(myvariable.charAt(0));
console.log(myvariable.indexOf("e"));
console.log(myvariable.lastIndexOf("l"));
console.log(myvariable.slice(5,8));//in the case slice last index not show
console.log(myvariable.toUpperCase());
console.log(myvariable.toLowerCase());
console.log(myvariable.includes("d"));
console.log(myvariable.split("w"));
console.log(myvariable.split(""));
console.log("earn,money,buy".split(","));


//numbers
const stringnumber="1234"
const stringnumber1="12123456dfghj"
const mynumber=12
const myfloat=42.443678

console.log(Number(stringnumber));
console.log(mynumber);
console.log(myfloat);

console.log(Number.parseFloat(stringnumber1));
console.log(Number.parseInt(myfloat));
console.log(Number.parseFloat(myfloat).toFixed(2));

console.log(typeof mynumber.toString());

console.log(parseFloat(myfloat).toFixed(3).toString());

Number.isNaN()
isNaN()

console.log(Number.isNaN("asdfghj"));
console.log(isNaN("qwsdfcvbn"));