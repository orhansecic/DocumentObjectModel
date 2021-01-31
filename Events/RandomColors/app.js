/*
var r = 255;
var g = 255;
var b = 0;


document.querySelector("body").style.backgroundColor = `rgb( ${r}, ${g}, ${b})`;
*/
/*
for(let i=0; i<10; i++){
  console.log(Math.ceil(Math.random() * 255));
};
*/

function randomColor(){
  var r = Math.ceil(Math.random() * 255);
  var g = Math.ceil(Math.random() * 255);
  var b = Math.ceil(Math.random() * 255);

  var body = document.querySelector("body");
  body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

  displayColor();

  function displayColor(){
      var colorDisplay = document.querySelector("h2");
      colorDisplay.innerText = `rgb(${r}, ${g}, ${b})`;

      if(r + g + b < 150){
        colorDisplay.style.color = "white";
      }else{
        colorDisplay.style.color = "black";
      }
}
};



var dugme = document.querySelector("button");
dugme.addEventListener("click", randomColor);
dugme.addEventListener("click", randomColor.displayColor);


var number = 0;

function counter(){
  var broj = document.querySelector("p");
  broj.innerText = `Counter ${++number}`;
}

var counterBTN = document.querySelector("#counter-btn");
counterBTN.addEventListener("click", counter);
