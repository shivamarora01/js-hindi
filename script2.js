const h1Ref = document.querySelector('#h1id');
const buttonRef = document.querySelector('.buttoncls');
buttonRef.innerHTML = "button Changed";
h1Ref.innerHTML = "change hogya yaar";


const nameNode = document.createElement('h1');
nameNode.id = 'newNodie';
nameNode.textContent = "New Creation hun";
const bodyRef = document.querySelector('body');
bodyRef.prepend(nameNode);

console.log(nameNode);
