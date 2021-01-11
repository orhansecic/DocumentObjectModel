const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}
/*
var foo = document.getElementsByTagName("img");

for(let i = 0; i<foo.length; i++){
  console.log(foo[i].src);

  if(foo[i].src = "https://images.unsplash.com/photo-1563281577-a7be47e20db9?ix…1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"){
    foo[i].src = "https://images.ctfassets.net/cnu0m8re1exe/70JhB0XIHJmprEsQmEIMx3/eee66f1505b8b1d53ff0f3b18b305a5e/shutterstock_1099958171.jpg?w=650&h=433&fit=fill";
  };
};
*/
