let easteregg = prompt("Digite seu nome aqui.(isso provavelmente não fara diferença)")

let easter1 = "Pedro";

let easter2 = "Diego";

if(easteregg == easter1){
    let x;
    x= document.createElement("li");
    x.innerHTML = "<a href='Pedre.html'>Pedro</a>";
    let ule = document.querySelector("#nav");
    ule.appendChild(x);
}
if(easteregg == easter2){
    let x;
    x= document.createElement("li");
    x.innerHTML = "<a href='diego.html'>Diego</a>";
    let ule = document.querySelector("#nav");
    ule.appendChild(x);
}

