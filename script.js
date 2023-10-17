let namstebtn = document.querySelector('button');
let textchang = document.querySelector('h1');
namstebtn.addEventListener('click' , changeMsg);
function changeMsg(){
    let name = prompt('enter new name');
    textchang.textContent =  name;
}

const buttonRef = document.querySelector('bt');
console.log(buttonRef);

const bar = document.getElementById('bt');
bar.innerHTML = "Tap it";