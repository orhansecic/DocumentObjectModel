//button event
var button = document.querySelector("button");

button.addEventListener("dblclick", foo);

function foo(e){
  console.log(e);
}

//input event
var input = document.querySelector("input");

input.addEventListener("keydown", function(e){
  if(e.key === "l"){
    this.style.width = "";
  }else if(e.key === "s"){
    this.style.width = "10px";
  };
});

function example(){
  console.log("Radi!");
}

document.querySelectorAll("button")[0].addEventListener("click", function(){
  body.style.backgroundColor = input.value;
});
var body = document.querySelector("body");
