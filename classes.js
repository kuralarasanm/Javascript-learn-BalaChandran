//classes

// const mypizza={
//     size:"medium",
//     crust:"original",
//     bake:function(){
//         return console.log(`baking a ${this.size} ${this.crust} crust pizza`);
//     }
// }

// mypizza.bake()

// class pizza{
//     constructor(){
//         this.size="medium"
//         this.crust="orignal"
//     }
//     bake(){
//         return console.log(`baking a ${this.size} ${this.crust} crust pizza`);
//     }
// }

// const anotherpizza=new pizza()
//  console.log(anotherpizza.size);
//  console.log(anotherpizza.bake());


//  class pizza1{
//     constructor(typepizza,sizepizza,crustpizza){
//         this.type=typepizza
//         this.size=sizepizza
//         this.crust=crustpizza
//         // this.toppings="olives"
//         this.toppings=[]
//     }
//     getToppings(){
//         return this.toppings
//     }
//     setToppings(toppingspizza){
//         // this.toppings=toppingspizza
//         this.toppings.push(toppingspizza)
//     }
//     bake(){
//         return console.log(`baking a ${this.size},${this.type} ${this.crust} crust pizza with ${this.toppings}`);
//     }
// }
// const newpizza=new pizza1("veg","small","thin")
// // newpizza.toppings="sausage"// it is not good practice
// newpizza.setToppings("sausage")
// newpizza.setToppings("egg")
// console.log(newpizza.getToppings());
// newpizza.bake()
// console.log(newpizza.getToppings());

// --------------------------------

      // parent to child

// class pizza{             
//     constructor(sizepizza){
//         this.size=sizepizza
//         this.crust="orginal"
//     }
//     getCrust(){
//         return this.crust
//     }
//     setCrust(crustpizza){
//         this.crust=crustpizza
//     }
// }

// class specialpizza extends pizza{
//     constructor(sizepizza){
//         super(sizepizza)
//         this.type="veg"
//     }
//     slice(){
//         console.log(`our ${this.type} ${this.size} ${this.crust} pizza has 8 slice`);
//     }
// }

// const myspecialpizza=new specialpizza("medium")
// myspecialpizza.slice()

// --------------------------------------------------------

//Factory function
//  function pizzaFactory(sizepizza){
//     const crust="orginal"
//     const size=sizepizza
//     return{
//         bake: ()=>{
//             console.log(`Baking a ${size} ${crust} crust pizza`);
//         }
//     }
//  }
// const mypizza=pizzaFactory("small")
// mypizza.bake()
// console.log(mypizza.crust);// here undefined is error


// class pizza{             
//     constructor(sizepizza){
//         this._size=sizepizza
//         this._crust="orginal"
//     }
//     getCrust(){
//         return this._crust
//     }
//     setCrust(crustpizza){
//         this._crust=crustpizza
//     }
// }

// ----------------------------------------------------

class pizza{ 
    crust="orginal" //public property
    #sauce="tomato" //privaye property           
    constructor(sizepizza){
        this.size=sizepizza
    }
    getCrust(){
        return this.crust
    }
    setCrust(crustpizza){
        this.crust=crustpizza
    }
    bake(){
        return console.log(`Baking a ${this.size} ${this.crust} ${this.#sauce} pizza`);
    }
}
const mypizza=new pizza("small")
mypizza.bake()
console.log(mypizza.getCrust()); 
// console.log(mypizza.#sauce); this is error because it is private