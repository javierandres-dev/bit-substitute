/* VARIABLES - CONSTANTES */
const $main = document.getElementById('main');
const obj = {
  email: null,
  password: null,
};

/* EVENTOS */
document.addEventListener('DOMContentLoaded', () => {
  $main.innerHTML = `
<form id="form">
<input type="email" name="email" id="email" placeholder="Correo electrónico">
<input type="password" name="password" id="password" placeholder="Contraseña">
<button type="submit">Iniciar sesión</button>
</form>
`;

  eventListeners();
});

/* FUNCIONES */
const eventListeners = () => {
  const $form = document.getElementById('form');
  const $email = document.getElementById('email');
  const $password = document.getElementById('password');
  $form.addEventListener('submit', login);
  $email.addEventListener('input', (e) => {
    obj.email = e.target.value;
  });
  $password.addEventListener('input', (e) => {
    obj.password = e.target.value;
  });
};

const login = async (event) => {
  event.preventDefault();
  const res = await fetch('http://localhost:4000/api/v1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  if (res.ok) {
    const json = await res.json();
    if (json.token) {
      const decoded = await jwt_decode(json.token);
      $main.innerHTML = `
      <h1>Hola, ${decoded.name}</h1><br><h2>Bienvenido</h2>
      `;
    } else {
      alert(json.message);
    }
  } else {
    alert('Ocurrió un error.');
  }
  /* fetch('http://localhost:4000/api/v1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  })
    .then((res) => {
      if (res.ok) {
      } else {
      }
    })
    .catch((error) => {
    }); */
};

/*
const $form = document.createElement('form');
const $input = document.createElement('input');
const $btn = document.createElement('button');
$btn.innerText = 'Iniciar sesión';
$form.appendChild($input);
$form.appendChild($btn);
$main.appendChild($form);
*/
