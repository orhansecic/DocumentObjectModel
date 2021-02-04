var input = document.querySelector("input");
var h1 = document.querySelector("h1");

input.addEventListener("input", function(e){
 h1.innerText = this.value;

 if(h1.innerText === "" || h1.innerText === " "){
    h1.innerText = "Type Bellow!";
  }
});
