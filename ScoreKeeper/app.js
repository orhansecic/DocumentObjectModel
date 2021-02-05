var buttons = document.querySelectorAll("button");

var greenBtn = buttons[0];
var blueBtn = buttons[1];
var redBtn = buttons[2];

var leftScore = document.querySelector("#left-score");
var rightScore = document.querySelector("#right-score");

greenBtn.addEventListener("click", function(){
    var score = parseInt(leftScore.innerText, 10);
    leftScore.innerText = ++score;
    console.log(score); 
    if(score === max){
        alert("Left Player Won!")
        leftScore.style.color = "green";
        rightScore.style.color = "red";
        this.disabled = "true";
    };
})
blueBtn.addEventListener("click", function(){
    var score = parseInt(rightScore.innerText, 10);
    console.log(max);
    if(score === max){
        alert("Right Player Won!")
        max = "";
    }else{
        rightScore.innerText = ++score;
        console.log(score); 
    }
})
redBtn.addEventListener("click", function(){
    leftScore.innerText = 0;
    rightScore.innerText = 0;
    input.value = "";
})

var input = document.querySelector("input");

var max = 0;
input.addEventListener("input", function(e){
    max = parseInt(input.value, 10);
})