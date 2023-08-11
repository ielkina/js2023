/**
 * Наследование
 * - extends
 * - super()
 */
// class Warrior {
//   constructor() {
//     this.name = '';
//     this.xp = '';
//     this.weapon = '';
//   }
//   gainXp;
// }
// class Mage {
//   constructor() {
//     this.name = '';
//     this.xp = '';
//     this.spells = [];
//   }
//   gainXp() {}
// }

class Hero {
  constructor({ name = 'hero', xp = 0 } = {}) {
    this.name = name;
    this.xp = xp;
  }
  gainXp(amount) {
    console.log(`${this.name} получает ${amount} опыта`);
    this.xp += amount;
  }
}

//наследование
class Warrior extends Hero {
  constructor({ weapon, ...restProps } = {}) {
    //super фн конструктора родительского класса, когда он вызывается тогда this будет доступен в наследуемом классе
    super(restProps);
    //для того что бы в конструкторе наследования получать доступ в this.weapon обязательно нужно вызывать super
    this.weapon = weapon;
  }
  attack() {
    console.log(`${this.name} атакует используя ${this.weapon}`);
  }
}

// class Berserk extends Warrior{
//   constructor({ ...restProps } = {}) {
//     super(restProps);
//     this.warcry =
//    }
// }

class Berserk extends Warrior {
  constructor({ warcry, ...restProps } = {}) {
    super(restProps);
    this.warcry = warcry;
  }
  babyRage() {
    console.log(`${this.name} кричит ${this.warcry}`);
  }
}

class Mage extends Hero {
  constructor({ spells, ...restProps } = {}) {
    super(restProps);
    this.spells = spells;
  }
  cast() {
    console.log(`${this.name} кастует ${this.spells}`);
  }
}

const mango = new Warrior({ name: 'mango', xp: 1000, weapon: 'алебарда' });
console.log(mango);
mango.attack();
mango.gainXp(1000);

const poly = new Mage({ name: 'poly', xp: 5000, spells: ['фаербол'] });
console.log(poly);
poly.cast();
poly.gainXp(10);

const kiwi = new Berserk({
  name: 'kiwi',
  xp: 500,
  weapon: 'knife',
  warcry: 'Yahooo',
});
kiwi.babyRage();
kiwi.attack()
kiwi.gainXp(50)

console.log('Warrior.prototype', Warrior.prototype);
console.log('Hero.prototype', Hero.prototype);

// //цепочка наследования

console.log(mango.__proto__ === Warrior.prototype);
console.log(Object.getPrototypeOf(mango) === Warrior.prototype);
console.log('Warrior.prototype', Warrior.prototype);
console.log(Warrior.prototype.__proto__ === Hero.prototype);
console.log(Hero.prototype.__proto__ === Object.prototype);

// const mango = new Hero({ name: 'mango', xp: 100 });
// console.log(mango);
// mango.gainXp(1000);

//JS не строго типизированный язык т.е в переменные могут быть записаны разные значения
//в JS у переменной нет значения, значение есть у типа

let name = 'mango';

name = true;
name = [];
name = 5;

//TS строго типизированный язык

//TS playground
