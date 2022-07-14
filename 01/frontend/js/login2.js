/* VARIABLES - CONSTANTES */
const obj = {
  email: null,
  password: null,
};
let decoded = null;

/* EVENTOS */
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('form')) {
    eventListeners();
  }
});

/* FUNCIONES */
const eventListeners = () => {
  const $form = document.getElementById('form');
  const $email = document.getElementById('email');
  const $password = document.getElementById('password');
  $form.addEventListener('submit', login);
  $email.addEventListener('input', (e) => {
    //console.log(e.target.value);
    obj.email = e.target.value;
  });
  $password.addEventListener('input', (e) => {
    //console.log(e.target.value);
    obj.password = e.target.value;
  });
};

const login = async (event) => {
  event.preventDefault();
  console.log('loguear usuario', obj);
  const res = await fetch('http://localhost:4000/api/v1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  console.log('res :>> ', res);
  if (res.ok) {
    console.log('res.ok');
    const json = await res.json();
    console.log('json :>> ', json);
    if (json.token) {
      decoded = await jwt_decode(json.token);
      sessionStorage.setItem('name', decoded.name);
      window.location.href = `login2bienvenido.html`;
    } else {
      alert(json.message);
    }
  } else {
    console.log('NO res.ok');
  }
};
