console.log(`slug`);
//Делаем Slug в URL из названия статьи (например и dev.to)
//Заголовок состоит только из букв и пробелов
//Нормализуем строку
//Разбираем по словам
//Сшиваем в строку с разделителями 

//Должно получится top-10-benefits-of-react-framework

const title = 'Top 10 benefits of React framework'


//первый вариант решения
const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);
const words = normalizedTitle.split(' ');
// console.log(words);
const slug = words.join('-');
// console.log(slug);



//второй вариант решения

//вызовы методов
//методы работают на результате вызова предыдущего метода
//1 переводит в нижний регистр 
//2 разбивает на массив
//3 соединяет в строку с разделительным знаком
//1 метод > 2 метод срабатывает на результате метода 1 > 3 метод срабатывает на результате метода 2 
const slug1 = title.toLowerCase().split(' ').join('-');
console.log(slug1);

