var tweetForm = document.querySelector("form");



var button = document.querySelector("button");
var commentSection = document.querySelector("ul");

button.addEventListener("click", function(){
  var usernameInput = tweetForm.elements.username.value;
  var tweetInput = tweetForm.elements.tweet.value;

  var user = document.createElement("b");
  var comment = document.createElement("li");

  user.innerText = usernameInput;
  comment.append(user, ` - ${tweetInput}`);

  commentSection.append(comment);

  document.querySelectorAll("input")[0].value = "";
  document.querySelectorAll("input")[1].value = "";

});
