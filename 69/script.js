//Пример вмешательства

// function User(name, age) {
//   this.name = name;
//   this.age = age;

//   this.say = function () {
//     console.log(`Имя пользователя: ${this.name}, возраст: ${this.age}`);
//   };
// }

// console.log(vova.name);
// console.log(vova.age);

// vova.name = 'Петр';
// vova.age = 30;

//Добавление инкапсуляции
// function User(name, age) {
//   this.name = name;
//   let userAge = age;

//   this.say = function () {
//     console.log(`Имя пользователя: ${this.name}, возраст: ${userAge}`);
//   };

//   this.getAge = function () {
//     return userAge;
//   };

//   this.setAge = function (age) {
//     if (typeof age === 'number' && age > 0 && age < 110) {
//       userAge = age;
//     } else {
//       console.log('Недопустимое выражение!');
//     }
//   };
// }

// const vova = new User('Vova', 28);

// console.log(vova.name);
// console.log(vova.getAge());

// vova.setAge(30);
// vova.setAge(300);
// console.log(vova.getAge());

// vova.say();

// Разбор на классах
// class User {
//   constructor(name, age) {
//     this.name = name;
//     this._age = age;
//   }

//   say() {
//     console.log(`Имя пользователя: ${this.name}, возраст: ${this._age}`);
//   }

//   get age() {
//     return this._age;
//   }

//   set age(age) {
//     if (typeof age === 'number' && age > 0 && age < 110) {
//       this._age = age;
//     } else {
//       console.log('Недопустимое выражение!');
//     }
//   }
// }

// const vova = new User('Vova', 28);
// console.log(vova.age);
// vova.age = 99;
// vova.say();

//Поля классов (работает только в Хроме, экспериментальный синтаксис)
class User {
  constructor(name, age) {
    this.name = name;
    this._age = age;
  }

  #surname = 'Nagorniy';

  say = () => {
    console.log(
      `Имя пользователя: ${this.name}${this.#surname}, возраст: ${this._age}`
    );
  };

  get age() {
    return this._age;
  }

  set age(age) {
    if (typeof age === 'number' && age > 0 && age < 110) {
      this._age = age;
    } else {
      console.log('Недопустимое выражение!');
    }
  }
}

const vova = new User('Vova', 28);
console.log(vova.surname);
vova.say();
