//Синтаксис async/await
//Последовательные операции
//Параллельные операции с Promise.all()
//try..catch

//по умолчанию всегда возвращает промис
async function getFruit(name) {
  const fruit = {
    strawberry: '🍓',
    kiwi: '🥝',
    apple: '🍏',
  };

  // return Promise.resolve(fruit[name]);
  // return 5;
  return new Promise(resolve => setTimeout(() => resolve(fruit[name]), 500));
}

// getFruit('apple').then(apple => console.log(apple));

//синтаксис

// const fn = async function fnName(params){};
// fnName();

// const fn = async (event) =>{}

// const obj ={
//   async ()
// }

// class x{
//   async getFruit (){}
// }

function makeSmoothie() {
  getFruit('apple').then(apple => {
    console.log(apple);
    getFruit('kiwi').then(kiwi => console.log(kiwi));
  });
}

// makeSmoothie();

//переписываем туже  функцию на асинхронную async

async function asyncMakeSmoothie() {
  //последовательное выполнение асинхронной функции
  // console.time('asyncMakeSmoothie');
  // const apple = await getFruit('apple');
  // console.log(apple); //500 ms
  // console.log(await getFruit('kiwi')); //50ms
  // console.timeEnd('asyncMakeSmoothie'); //~1009 ms
  //****** */
  //паралельноe выполнение асинхронной функции
  console.time('asyncMakeSmoothie');
  const apple = getFruit('apple');
  const kiwi = getFruit('kiwi');
  console.log(apple, kiwi);
  const fruits = await Promise.all([apple, kiwi]);
  console.log(fruits);
  console.timeEnd('asyncMakeSmoothie'); //~500ms
}
console.log(1);
//киви не выйдет на экран пока в функции не исполнится условие const apple
asyncMakeSmoothie(); //apple, kiwi

console.log(3);

//отлов ошибок

async function errorMakeSmoothie() {
  try {
    console.time('errorMakeSmoothie');
    const apple = getFruit('apple');
    const kiwi = getFruit('kiwi');
    console.log(apple, kiwi);
    const fruits = await Promise.all([apple, kiwi]);
    console.log(fruits);
    console.timeEnd('errorMakeSmoothie'); //~500ms
    return fruits;
  } catch (error) {
    console.log(error);
  }
}

errorMakeSmoothie().then(fruits=> console.log(fruits));
