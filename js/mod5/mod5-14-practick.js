//[P]
const parent = {
  name: 'Parent',
  sayHello() {
    console.log(this.name);
  },
};
parent.sayHello(); //Parent

//прототип юзер
const child = Object.create(parent);
child.age = 29;
child.sayHello(); //Parent
console.log(child.name); //Parent прототип свойств обьекта родителя
child.name = 'Child';
console.log(child.name); //child

for (const key in child) {
  console.log(key);
  if (child.hasOwnProperty(key)) {
    //вернет только собственное свойство обьекта в котором ищем ключ
    console.log(key);
  }
  if (Object.prototype.hasOwnProperty.call(child, key)) {
    console.log(key);
  }
}

// прототип parent->child
const child1 = Object.create(child);
child1.lastName = 'Child 1';
child1.hasOwnProperty = function (key) {
  if (key === 'name') {
    return true;
  }
  return false;
};
console.log(child1);

//[P]сделать класс hero у которого есть свойство name, hp i damage а также метод attack
//Сделать класс hero добавить свойство gender но использовать приватное поле и get & set
//добавить проверку в set что б нельзя было поставить что попало

class Hero {
  static genders = ['male', 'female'];
  #gender;
  constructor({ name, hp, damage, gender }) {
    this.name = name;
    this.hp = hp;
    this.damage = damage;
    this.#gender = gender;
  }
  attack() {
    return `I'm ${this.name}, attack with ${this.damage}, hp ${this.hp}`;
  }
  get gender() {
    console.log('get gender');
    return this.#gender;
  }
  set gender(value) {
    console.log('set');
    if (Hero.genders.includes(value)) {
      this.#gender = value;
    } else {
      console.warn('No acceptable value');
    }
  }
  changeGender(newGender) {
    this.#gender = newGender;
  }
}

const hero = new Hero({
  name: 'Rick',
  hp: 10,
  damage: 10,
  gender: 'male',
});
console.log(hero.attack());
console.log(hero.gender);
console.log(hero);

hero.gender = 'male';
console.log(hero.gender); //male
hero.gender = 'me';
console.log(hero.gender); //No acceptable value
//изменение приватны свойств можно с помощью методов в самом классе родителя
hero.changeGender('me');
console.log(hero.gender); //me

const hero1 = new Hero({
  name: 'Spider',
  damage: 20,
  hp: 100,
});

console.log(hero1.attack());

//[P]создать класс Ork и Human которые имеют такие же свойства каки у Hero
//у орков есть дополнительное свойство ярость (rage) и метод метод входить в ярость (rampage)
//у людей есть дополнительное свойство mana и метод вызов (spell)

class Ork extends Hero {
  constructor({ rage, ...params }) {
    super(params);
    this.rage = rage;
  }
  rampage() {
    return `ork ${this.name} rampage ${this.rage}`;
  }
}

console.log(Ork);

class Human extends Hero {
  constructor({ mana, ...params } = {}) {
    super(params);
    this.mana = mana;
  }
  spell() {
    return `human ${this.name} make spell mana ${this.mana}`;
  }
}

const ork = new Ork({
  name: 'Ork',
  rage: 50,
  damage: 50,
  hp: 200,
});

const human = new Human({
  name: 'human',
  damage: 50,
  hp: 120,
  mana: 200,
});

console.log(ork.rampage());
console.log(ork.attack());

console.log(human.spell());
console.log(human.attack());
// console.log(human.rampage());//TypeError метод относиться только к классу орк и в класс людине не наследуется

//[P]

class Counter {
  #counter;
  #step;
  constructor(step = 1) {
    this.#counter = 0;
    this.#step = step;
  }
  increase() {
    this.#counter += this.#step
  }
  decrease() {
    this.#counter -=this.#step
  }
  get count() {
    return `текущее значение счетчика ${this.#counter}`
  }
}

const count = new Counter();

const count1 = new Counter();

console.log(count.count);

count1.increase();
count1.increase();
count1.increase();
count1.increase();
count1.increase();

console.log(count1.count);//5

count1.decrease()

console.log(count1.count);//4


