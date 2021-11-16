function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function () {
    console.log(`Hello ${this.name}`);
  };
}

User.prototype.exit = function () {
  console.log(`Пользователь ${this.name} вышел`);
};

const vova = new User('Vova', 28);
const ira = new User('Ira', 26);

vova.exit();

ira.hello();
