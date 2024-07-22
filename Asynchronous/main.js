//Asynchronous
// console.log("first");
// console.log("second");
// console.log("third");

// console.log('first');

// //set timeout for 2 seconds
// setTimeout(()=>{
//     console.log('second'),2000;
// })

// console.log('third');
// ------------------------------------------

//promises
//3 states: pending, Fulfilled,Rejected

// const myPromise = new Promise((resolve, reject) => {
//   const error = false;
// // const error=true
//   if (!error) {
//     resolve("Yes! resolved the promise");
//   } else {
//     reject("No! rejected the promise");
//   }
// });
// console.log(myPromise);

// myPromise
//   .then((value) => {
//     // console.log(value);
//     return value + " welcome";
//   })
//   .then((newValue) => console.log(newValue))
//   .catch(error=>{
//     console.log(error);
//   })
// ------------------------------------------------------------------
// const myPromise = new Promise((resolve, reject) => {
//     const error = false;
//   // const error=true
//     if (!error) {
//       resolve("Yes! resolved the promise");
//     } else {
//       reject("No! rejected the promise");
//     }
//   });

// const myNextPromise =new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         resolve("myNextPromise resolved")
//     },3000)
// })

// myNextPromise
// .then(value=>{
//     console.log(value);
// })

// myPromise.then(value=>{
//     console.log(value);
// })
// ---------------------------------------------------

// const users=fetch("https://jsonplaceholder.typicode.com/users").then(response=>{
//     // console.log(response.json());
//     return response.json()
// }).then(users=>{
//     // console.log(users);
//     users.forEach(user => {
//         console.log(user);
//     });
// })

// console.log(users);
// -------------------------------------------------------------
// or
//Async / Await

// const myUsers={
//     userList:[]
// }

// const users=async()=>{
//  const response=await fetch("https://jsonplaceholder.typicode.com/users")
//  const userData=await response.json()
//  console.log(userData);
//  return userData
// }
// users()

// const anotherFunction=async () =>{
//     const data=await users()
//     myUsers.userList=data
//     console.log(myUsers);
//     return data
// }

// anotherFunction()
// console.log(myUsers);

// -------------------------------------------------------------

// const myUsers={
//     userList:[]
// }

// const users=async()=>{
//  const response=await fetch("https://jsonplaceholder.typicode.com/users")
//  const userData=await response.json()
//  anotherFunction(userData);
//  return userData
// }

// const anotherFunction=(data) =>{

//     myUsers.userList=data
//     console.log(myUsers);
//     return data
// }

// users()
// console.log(myUsers);

// ------------------------------------------------------

// const getDadJoke=async ()=>{
//     const response=await fetch("https://icanhazdadjoke.com/",{
//         method:"GET",
//         headers:{
//             Accept:"application/json"
//         }
//     })
//     const jsonJokeData=await response.json()
//     console.log(jsonJokeData);
//     console.log(jsonJokeData.joke);
// }
// getDadJoke()

// const getDadJoke=async ()=>{
//     const response=await fetch("https://icanhazdadjoke.com/",{
//         method:"GET",
//         headers:{
//             Accept:"text/plain"
//         }
//     })
//     const jsonJokeData=await response.text()
//     console.log(jsonJokeData);
// }
// getDadJoke()

// --------------
// const jokeObject = {
//   id: "xHY8xsHYTnb",
//   joke: "What lies at the bottom of the ocean and twitches? A nervous wreck.",
// };

// const postDadJoke = async (jokeObj) => {
//   const response = await fetch("https://httpbin.org/post", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(jokeObj)
//   });
//   const jsonJokeData = await response.json();
//   console.log(jsonJokeData);
// };
// postDadJoke(jokeObject);
// ------------------------------------------------------------------------------------

const getDataFromForm = () => {
  const requestObj = {
    firstName: "kuralarasan",
    lastName: "M",
    categories:["nerdy"],
    limit: 3,
  };
  return requestObj;
};

const buildRequestUrl = (requestData) => {
  return `http://xxxxxxx.xxx?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`;
};

const requestJoke = async (url) => {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  const joke = jsonResponse.value.joke;
  postJokeToPage(joke);
};

const postJokeToPage = (joke) => {
  console.log(joke);
};

const processJokeRequest = async () => {
  const requestData = getDataFromForm();
  const requestUrl = buildRequestUrl(requestData);
  await requestJoke(requestUrl);
  console.log("finished");
};

processJokeRequest();
