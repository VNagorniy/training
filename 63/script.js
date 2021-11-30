// localStorage.setItem('number', 16);

// localStorage.getItem('number');

// localStorage.removeItem('number');

// localStorage.clear();

const checkbox = document.querySelector('#checkbox'),
  form = document.querySelector('form'),
  change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
  checkbox.checked = true;
}
if (localStorage.getItem('bg') === 'changed') {
  form.style.backgroundColor = 'red';
}

checkbox.addEventListener('change', () => {
  localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
  if (localStorage.getItem('bg') === 'changed') {
    localStorage.removeItem('bg');
    form.style.backgroundColor = '#fff';
  } else {
    localStorage.setItem('bg', 'changed');
    form.style.backgroundColor = 'red';
  }
});

const persone = {
  name: 'Vova',
  age: 28,
};

const serializedPersone = JSON.stringify(persone);
localStorage.setItem('vova', serializedPersone);

console.log(JSON.parse(localStorage.getItem('vova')));
