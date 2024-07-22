//object
//key-value pairs in curly braces

const object={name:"kural"}

const newobject={
    subscriber:true,
    no:10000,
    content:{
        earn:"money",
        grow:"new"
    },
    division:["hi","hello","welcome"],
    action: function(){
         return "hello world"
    },
    action1:function(){
        return `earn ${this.content.earn}`
    }
}

console.log(object.name);
console.log(newobject.subscriber);
console.log(newobject.content);
console.log(newobject.content.earn);
console.log(newobject.division);
console.log(newobject.division[1]);

console.log(newobject["subscriber"]);
console.log(newobject["content"]);

console.log(newobject.action());

console.log(newobject.action1());


const vechicle={
    doors:4,
    engine: function(){
        return "turbo"
    }
}
console.log(vechicle.engine());
//vechicle to car inheritance
const car=Object.create(vechicle)
car.wheels=4

car.engine= function(){
    return "boost"
}
console.log(car.engine());
//car to tesla inherit
const tesla=Object.create(car)
tesla.engine= function(){
    return "nitro"
}
console.log(tesla.engine());
console.log(tesla.doors);


const movie={
    actor:"ajith",
    music:"yuvan",
    director:"lokesh",
    producer:"ak"
}
delete movie.producer
console.log(movie.producer);
console.log(movie.hasOwnProperty("producer"));
console.log(Object.keys(movie));
console.log(Object.values(movie));

for(let job in movie){
    console.log(movie[job]);
    console.log(`${job},it's ${movie[job]}`);
}


//destructuring the objects

const {music:myfavmusicdirector,director:myfavdirector}=movie
console.log(myfavmusicdirector,myfavdirector);

const {actor,music,director,producer}=movie
console.log(actor);
console.log(music,director,producer);

function sings(music) {
    return music
}
console.log(sings(movie));

function sings1({music}) {
    return music
}

console.log(sings1(movie));