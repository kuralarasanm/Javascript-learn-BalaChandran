//Event Listeners

// const view=document.querySelector("#view2")
// const div=view.querySelector("div")
// const h2=div.querySelector("h2")
// console.log(h2);

//syntax
// addEventListeners(event,function,useCapture)

// const doSomething = () => {
//   alert("doing something");
// };

// h2.addEventListener("click", doSomething, false);
// h2.removeEventListener("click", doSomething, false);

// h2.addEventListener("click",(event)=>{
//     console.log(event.target);
//     event.target.textContent="subscribed"
// })
// h2.addEventListener("click",function(event){
//     console.log(event.target);
//     event.target.textContent="subscribed"
// })

// document.addEventListener("readystatechange", (event) => {
//   if (event.target.readyState === "complete") {
//     console.log("complete");
//     initApp();
//   }
// });

// const initApp = () => {
//   const view = document.querySelector("#view2");
//   const div = view.querySelector("div");
//   const h2 = div.querySelector("h2");
//   //usecapture when false bottom to top or child to parent
//   //   view.addEventListener("click",(event)=>{
//   //     view.style.background="purple"
//   //   })

//   //   div.addEventListener("click",(event)=>{
//   //     div.style.background="yellow"
//   //   })

//   //   h2.addEventListener("click",(event)=>{
//   //     event.stopPropagation()// this line for child to parent not access
//   //     event.target.textContent="subscribed"
//   //   })
//   //usecapture when true top to down or parent to child
//   // view.addEventListener("click",(event)=>{
//   //     view.style.background="purple"
//   //   },true)

//   //   div.addEventListener("click",(event)=>{
//   //     // event.stopPropagation()
//   //     div.style.background="yellow"
//   //   },true)

//   //   h2.addEventListener("click",(event)=>{
//   //     event.stopPropagation()// this line for child to parent not access
//   //     event.target.textContent="subscribed"
//   //   },true)

//   view.addEventListener("click", (event) => {
//     // view.classList.add("purple")
//     // view.classList.remove("darkblue")

//     view.classList.toggle("purple");
//     view.classList.toggle("darkblue");
//   });

//   div.addEventListener("click", (event) => {
//     div.classList.toggle("green");
//     div.classList.toggle("black");
//   });

//   h2.addEventListener("click", (event) => {
//     const myText = event.target.textContent;
//     myText === "subscribe"
//       ? (event.target.textContent = "subscribed")
//       : (event.target.textContent = "subscribe");
//   });

//   const nav=document.querySelector("nav")
//   nav.addEventListener("mouseover",(event)=>{
//     event.target.classList.add("height100")
//   })
//   nav.addEventListener("mouseout",(event)=>{
//     event.target.classList.remove("height100")
//   })

// };
//   -------------------------------------------------
//section3
document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
      console.log("complete");
      initApp();
    }
  });

const initApp = () => {
  const view3 = document.querySelector("#view3");
  const myForm = view3.querySelector("#myForm");
  myForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("submit event");
  });
};
