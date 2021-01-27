var link = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png";
var broj = 1;

for(let i = 2; i<=152; i++){

var pokemon = document.createElement("div");


var slika = document.createElement("img");
slika.setAttribute("src", link);


var index = document.createElement("span");
index.innerHTML = "#" + broj;
pokemon.appendChild(slika);
pokemon.appendChild(index);
document.querySelector("div").appendChild(pokemon);
link = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + i + ".png";
broj++;


};
