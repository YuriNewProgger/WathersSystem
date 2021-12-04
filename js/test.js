
// let cities = Array.from(document.querySelectorAll(".cities>li"));

// let arrCities = [];
// for(let i = 0; i < cities.length; i++){
//     arrCities[i] = cities[i].innerHTML;
// }

// console.log(arrCities);

let arrCities = ["Moscow", "Paris", "London", "New-York", "Pekin"];

let ulCities = document.querySelector("ul");

for(let i = 0; i < arrCities.length; i++){
    let elem = document.createElement("li");
    let elemText = document.createTextNode(arrCities[i]);
    elem.appendChild(elemText);
    ulCities.appendChild(elem);
}
