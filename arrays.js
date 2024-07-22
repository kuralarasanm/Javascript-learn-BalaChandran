//arrays

const myarray=[]
//adding element

myarray[0]="money"
myarray[1]="earn"
myarray[2]=999
myarray[3]=true

console.log(myarray);

myarray.push("click")
console.log(myarray);
myarray.pop()
console.log(myarray);
myarray.unshift("click")
console.log(myarray);
myarray.shift()
console.log(myarray);

const lastitems=myarray.push("game")
console.log(lastitems);
console.log(myarray);

const lastitems1=myarray.pop()
console.log(lastitems1);
console.log(myarray);

const firstitems=myarray.unshift("game")
console.log(firstitems);
console.log(myarray);

const firstitems1=myarray.shift()
console.log(firstitems1);
console.log(myarray);

myarray.splice(2,1)
console.log(myarray);
console.log(myarray[2]);

myarray.splice(1,2)
console.log(myarray);

myarray.splice(1,1,"earned")//update
console.log(myarray);

const newarray=myarray.slice(1,3)
console.log(newarray);
console.log(myarray);

myarray.reverse()
console.log(myarray);

const join=myarray.join()
console.log(myarray);
console.log(join);


const newmyarray=["false",1234,true]
console.log(newmyarray);

const concat=myarray.concat(newmyarray)
console.log(concat);
           //or
const concat1=[...myarray,...newmyarray]
console.log(concat1);