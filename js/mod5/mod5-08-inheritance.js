/**
 * - Наследование
 * - extends
 * - super()
 */

//некоторые свойства в классах дублируются и это плохо
//пример
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
    console.log(this)
  }

  gainXp(value) {
    console.log(`${this.name} получает ${value} опыта`);
    this.xp += value;
  }
}

/*наследование*/

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

class Berserk extends Warrior {
  constructor({ warcry, ...restProps } = {}) {
    super(restProps);
    this.warcry = warcry;
  }
  babyRage(warcry) {
    console.log(`${this.name} кричит ${warcry || this.warcry}`);
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

const mango = new Hero({ name: 'mango', xp: 100 }); //Hero {name: 'mango', xp: 100}
mango.gainXp(1000); //добавляем опыт с помощью метода
console.log(mango);

//при вызове new Warrior вызывается конструктор класса Warrior
//свойства обьекта new Warrior передаются в параметры конструктора класса Warrior
//в конструкторе вызывается фн super
//Super это вызов fn конструктора класса Hero
//при вызове super Параметры конструктора Warrior передаются в конструктор наследуемого класса те Hero
const sara = new Warrior({ name: 'sara', xp: 200, weapon: 'нож' }); //Hero {name: 'mango', xp: 100}
sara.gainXp(1000); //добавляем опыт с помощью метода
console.log(sara);
sara.attack();

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
kiwi.babyRage('jgkhgkjhgkhjg');
kiwi.attack()
kiwi.gainXp(50)


//цепочка наследования
console.log(mango.__proto__ === Hero.prototype);
console.log(sara.__proto__ === Warrior.prototype);
console.log(poly.__proto__ === Mage.prototype);
console.log(kiwi.__proto__ === Berserk.prototype);
console.log(Object.getPrototypeOf(sara) === Warrior.prototype);
console.log(Hero.prototype.__proto__ === Object.prototype);
console.log(Warrior.prototype.__proto__ === Hero.prototype);
console.log(Berserk.prototype.__proto__ === Warrior.prototype);
console.log(Berserk.prototype.__proto__ === Hero.prototype);
console.log(Mage.prototype.__proto__ === Warrior.prototype);
console.log(Mage.prototype.__proto__ === Hero.prototype);
console.log('Warrior.prototype', Warrior.prototype);
console.log('Hero.prototype', Hero.prototype);


//JS не строго типизированный язык т.е в переменные могут быть записаны разные значения
//в JS у переменной нет значения, значение есть у типа

let name = 'mango';
name = true;
name = [];
name = 5;
console.log(name);// 5 тип данных для JS не имеет значение 

//TS строго типизированный язык
//TS playground
// https://www.typescriptlang.org/play?ssl=3&ssc=13&pln=1&pc=1#code/DYUwLgBArgziBOA5AhgWxBAvBA5K5AdgOYD2OAULAiulrgA4nACeFVSaG2ArEA
let userName = 'mango'
userName = 'poly'
userName = 5 //ошибка из за разного типа данных у переменной


//Знать обязательно

console.log([1, 2, 3, 4, 5].map(x => x * 2).filter(y => y < 5));
