const $h1 = document.getElementById('welcome');
const name = sessionStorage.getItem('name');
$h1.innerText = `${name}, bienvenido!`;
