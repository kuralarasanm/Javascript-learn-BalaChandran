// JSON javascript object notation
//text format
//to send and rerceive data in many programming languages

const myobj={
    name:"kural",
    content:["job","developer","java"],
    sub: function(){
        console.log("thank you");
    }
}
console.log(myobj);
console.log(myobj.name);
myobj.sub()

const sendJSON=JSON.stringify(myobj)
console.log(sendJSON);
console.log(sendJSON.name);
console.log(typeof myobj);
console.log(typeof sendJSON);

const receiveJSON=JSON.parse(sendJSON)
console.log(receiveJSON);
console.log(typeof receiveJSON);