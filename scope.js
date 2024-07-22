// scope let,var and const

//global scope
var x=1
let y=2
const z=3

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myfunction() {
    const z=5
    console.log(`function:${x}`);
    console.log(`function:${y}`);
    console.log(`function:${z}`);

    if(true){
        let y=4
        console.log(`block:${x}`);
        console.log(`block:${y}`);
        console.log(`block:${z}`);
    }
}

myfunction()
console.log(y);