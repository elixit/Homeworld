document.querySelector("#test").addEventListener("click",planetView);

function pvBtnBuilder(val) {

document.getElementById("viewBtn").style.visibility = 'visible';

console.log('This guy', val);

let view = document.querySelector('#viewBtn');
view.setAttribute('href', '/planet/' + val)

}

// const image = document.getElementById('#imgPlanet');

// if (Planet.planet_name === 'Mercury') {
//     image="images/Mercury.png";
// }