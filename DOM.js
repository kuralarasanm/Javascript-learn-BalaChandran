//DOM Document Object Model

const view1=document.getElementById("view1")
console.log(view1);

const view2=document.querySelector("#view2")
console.log(view2);

// view1.style.display="none"
// view2.style.display="flex"

view1.style.display="flex"
view2.style.display="none"

const views=document.getElementsByClassName("view")
console.log(views);

const sameViews=document.querySelectorAll(".view")
console.log(sameViews);

const divs=document.querySelectorAll("div")
console.log(divs);

const sameDivs=document.getElementsByTagName("div")
console.log(sameDivs);

const evenDivs=document.querySelectorAll("div:nth-of-type(2n)")
console.log(evenDivs);
evenDivs[4].style.backgroundColor="purple"

// for(let i=0;i<=evenDivs.length;i++){//here <= is error
//     evenDivs[i].style.width="150px"
//     evenDivs[i].style.backgroundColor="green"
// }
for (let i = 0; i < evenDivs.length; i++) {
    evenDivs[i].style.width = "150px";
    evenDivs[i].style.backgroundColor = "green";
}

const navText = document.querySelector("nav h1");
console.log(navText);
navText.textContent = "Hello World";
const navbar=document.querySelector("nav")
navbar.innerHTML='<h1> kural </h1> <p>hello</p>'
console.log(navbar);
navbar.style.justifyContent="space-evenly"

console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes);
console.log(evenDivs[0].parentElement.hasChildNodes());
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].nextElementSibling);
console.log(evenDivs[0].nextElementSibling.nextElementSibling);
console.log(evenDivs[0].previousSibling)
console.log(evenDivs[0].previousElementSibling);

view1.style.display="none"
view2.style.display="flex"
view2.style.flexDirection="row"
view2.style.flexWrap="wrap"
view2.style.margin="10px"

console.log(view2.lastElementChild);
// view2.lastElementChild.remove()
while(view2.lastChild){
    view2.lastChild.remove()
}

// const newDiv=document.createElement("div")
// newDiv.textContent="HI"
// newDiv.style.width="100px"
// newDiv.style.height="100px"
// newDiv.style.backgroundColor="yellow"
// newDiv.style.color="red"
// newDiv.style.display="flex"
// newDiv.style.justifyContent="center"
// newDiv.style.alignItems="center"
// view2.append(newDiv)

const createDiv=(parent,iter)=>{
    const newDiv=document.createElement("div")
newDiv.textContent=iter
newDiv.style.width="100px"
newDiv.style.height="100px"
newDiv.style.margin="10px"
newDiv.style.backgroundColor="yellow"
newDiv.style.color="red"
newDiv.style.display="flex"
newDiv.style.justifyContent="center"
newDiv.style.alignItems="center"
parent.append(newDiv)
}
// createDiv(view2,1)
for(let i=1;i<11;i++){
    createDiv(view2,i)
    
}
