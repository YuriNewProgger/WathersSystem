function btnFactory(color, border){
    let b = document.createElement("button");
    b.style.backgroundColor = color;
    b.style.border = border;  
    return b;
}

let arrCities = ["Moscow", "Paris", "London", "New-York", "Pekin"];

let ulCities = document.querySelector("ul");

for(let i = 0; i < arrCities.length; i++){
    let btn = btnFactory("Transparent", "none");
    let elem = document.createElement("li");
    let elemText = document.createTextNode(arrCities[i]);
    btn.appendChild(elemText);
    elem.appendChild(btn);
    ulCities.appendChild(elem);
}
