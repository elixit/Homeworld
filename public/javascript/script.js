document.querySelector("#test").addEventListener("click",planetView);

let pid = '';

function pvBtnBuilder(val) {

console.log(val);

document.getElementById("viewBtn").style.visibility = 'visible';

pid = val;

console.log('pid is' + pid);

let view = document.querySelector('#viewBtn');
view.setAttribute('href', '/planet/' + pid);

}

function planetView() {

console.log('This is planet' + pid)

}


