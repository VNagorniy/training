const persone = {
  name: 'Vova',
  tel: '+7918',
  parents: {
    mom: 'Irina',
    dad: 'Sergey',
  },
};

const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = 'Olga';

console.log(persone);
console.log(clone);
