function showThis(a, b) {
  console.log(this);
  function sum() {
    console.log(this);
    return a + b;
  }
  console.log(sum());
}

showThis(2, 5);

const obj = {
  a: 20,
  b: 15,
  sum: function () {
    console.log(this);
  },
};
obj.sum();

function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function () {
    console.log(`Hello` + this.name);
  };
}

let vova = new User('Vova', 28);

function sayName(surname) {
  console.log(this);
  console.log(this.name + surname);
}

const user = {
  name: 'Vova',
};

sayName.call(user, 'Nagorniy');
sayName.apply(user, ['Nagorniy']);

function count(num) {
  return this * num;
}

const double = count.bind(2);

console.log(double(2));
console.log(double(15));
// 1) Обычная функция: this = window, но если use strict - undefined
// 2) Контекст у методов объета - сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind
