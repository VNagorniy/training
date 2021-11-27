// filter

// const names = ['Vova', 'Ira', 'Sergey'];

// const shortNames = names.filter(function (name) {
//   return name.length < 5;
// });

// console.log(shortNames);

//map

// const answers = ['VoVa', 'IRa', 'SeRGEY'];
// const result = answers.map((item) => item.toLocaleLowerCase());
// console.log(result);

// every / some

// const some = [4, 'Vova', 'Tol'];
// console.log(some.some((item) => typeof item === 'number'));
// console.log(some.every((item) => typeof item === 'number'));

//reduce

const arr = [4, 5, 1, 8, 10];

const res = arr.reduce((sum, current) => sum + current, 3);
console.log(res);

//Общий пример

const obj = {
  vova: 'persone',
  ira: 'persone',
  dog: 'animal',
  cat: 'animal',
};

const newArr = Object.entries(obj)
  .filter((item) => item[1] == 'persone')
  .map((item) => item[0]);
console.log(newArr);
