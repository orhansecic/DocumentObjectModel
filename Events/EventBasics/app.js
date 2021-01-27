var body = document.querySelector("body");

function foo(){
  body.style.backgroundColor = "black";
  document.querySelector("h1").style.color = "white";
}

function foo2(){
  body.style.backgroundColor = "white";
  document.querySelector("h1").style.color = "black";
}

function background(){
  var color = document.querySelector("#color").value;

  body.style.backgroundColor = color;
}

var buttons = document.querySelectorAll("button");

for(let i = 0; i<buttons.length; i++){
  buttons[i].onclick = function(){
    console.log("It works");
    console.log("I hope so");
  }
}
