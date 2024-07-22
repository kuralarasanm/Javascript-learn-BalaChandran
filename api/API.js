// API
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("complete");
    initApp();
  }
});

const initApp = () => {
  const myContent = ["earn", "grow", "give"];
  const myObject = {
    name:"kural",
    myContent:["earn","grow","give"],
    logName:function(){
      console.log(this.name);
    }
  };
  // window.sessionStorage.setItem("mySessionStore",JSON.stringify(myObject))
  // window.localStorage.setItem("mySessionStore",JSON.stringify(myObject))
  localStorage.setItem("mySessionStore",JSON.stringify(myObject))
  // const key=localStorage.key(0)
  // const key=localStorage.length
  // const key=localStorage.removeItem("m")
  const key=localStorage.clear
  console.log(key);
  const mySessionData=JSON.parse(sessionStorage.getItem("mySessionStore"))
  console.log(mySessionData);
};
