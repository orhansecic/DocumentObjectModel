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

/*
for(let i = 0; i<buttons.length; i++){
  buttons[i].onclick = function(){
    console.log("It works");
    console.log("I hope so");
  }
}
*/
var title = document.querySelector("h1");
title.addEventListener("click", function(){
  document.querySelector("body").style.backgroundColor = "red";
})
title.addEventListener("dblclick", function(){
  body.style.backgroundColor = "white";
})

function appearIMG(){
  document.querySelector("img").style.display = "initial";
}

function disappearIMG(){
  document.querySelector("img").style.display = "none";
}

function twist(){
  console.log("TWIST!");
};

function shout(){
  console.log("SHOUT!");
};
