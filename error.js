//error and error handling
"use strict"

// variable="kural"//err
// console.log(variable);

const variable="kural"
console.log(variable);

// Object..create()//err

// variable="kuralarasan"//err
// ----------------------------------------
// const makeError=()=>{
//     try {
//         const name="kural"
//         name="kuralarasan"
//     } catch (error) {
//         console.log(error);
//         console.error(error)
//         console.warn(error)
//         console.table(error)
//         console.error(error.stack)
//         console.error(error.name)
//         logTheError(error.stack)
//     }
// }
// makeError()

// ------------------------------------------

// const makeError=()=>{
//     try {
//         throw new CustomerError("this is customer error")
//     } catch (error) {
//         console.log(error);
//     }
// }
// makeError()

// function CustomerError(message) {
//     this.message=message
//     this.name="CustomerError"
//     this.stack=`${this.name}:${this.message}`
// }
// -------------------------------------------------------
// const makeError=()=>{
//     try {
//         throw new Error("this is customer error")// javaScript inbuild error
//     } catch (error) {
//         console.log(error.stack);
//         console.log(error.name);
//         console.log(error.message);

//     }finally{
//         console.log("...finally");
//     }
// }
// makeError()

// -------------------------------------------------------------------------

const makeError=()=>{
    let i=0
    while(i<=5){
        try {
            if(1%2 !==0){
                throw new Error("odd number")
            }
            console.log("even number");
        } catch (error) {
            console.error(error)
        }finally{
            console.log("...finally");
            i++
        }
    }
}
makeError()