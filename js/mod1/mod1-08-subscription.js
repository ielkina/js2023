console.log('subscription');

//Напиши скрипт проверки подписки пользователя при доступе к контенту
//Есть три типа подписки: free, pro, vip
//Получить доступ могут только пользователь pro и vip

const sub = 'pro';
//если пользователь pro или vip тогда есть доступ

const canAccessContent = sub === 'pro' || (sub === 'vip');
console.log(`Есть доступ к контенту?`, canAccessContent);

//|| (или) - запинаеться на правде ивозвращает его,
console.log(false || true); //true
console.log(true || true); //true
console.log(true || false); //true
console.log(false || false); //false
//&& (и) - запинается на лжи и возвращает его
console.log(false && true); //false
console.log(true && true); //true
console.log(true && false); //false
console.log(false && false); //false
