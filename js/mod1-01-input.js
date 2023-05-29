console.log('input');
//модальные окна
//Ввод пользователя
//Методы window.confirm() и window.prompt()


//confirm подтверждение 
//'Хотите продлить прописку'

const message = 'Хотите продлить прописку';
const shouldRenew = confirm(message);
//или
// const shouldRenew = confirm('Хотите продлить прописку');
console.log(shouldRenew);//возвращает true или false, блокирует исполнение кода, возвращает значение boolean


//prompt - ввод данных
//"Введите количество товаров"
const quality = prompt('Введите количество товара');
console.log(quality);//возвращает веденные данные, при отмене возвращает null(ничто)
console.log(typeof quality);//возвращает тип строка, при отмене ввода данных обьект

//при желании возврата числового типа данны 
// let quality = prompt('Введите количество товара');
// quality = Number(quality);
// console.log(quality)
// console.log(typeof quality);