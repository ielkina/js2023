// const Joi = require('joi');
// const { required } = require('joi');
// const shortid = require('shortid');
// const express = require('express');

// const app = express();

// // app.get('/', function (req, res) {
// //   res.send('Hello World');
// // });

// app.use('*', (req, res) => {
//   console.log(`Был запрос от браузера`);
//   res.send(`
//     <h1>Ну это мол Html тебе в ответ</h1>
//   `);
// });

// const listener = app.listen(4444, () => {
//   console.log(`Веб сервер запущен на порте ${listener.address().port}`);
// });

// const message = 'NodeJS in amazing!';
// console.log(message);

// const passwordSchema = Joi.string().min(3).max(10).alphanum();

// console.log(passwordSchema.validate('weqeqwerw'));

// console.log(shortid.generate());

// import validatePassword from './js/validate-password';

// console.log(validatePassword);

//импорт  обьекта функций
// import apiServise from './js/serever';

// console.log(apiServise);

//импортируем имена сущностей файла

// import {
//   updateUserById,
//   number as value, //переназываем сущность
// } from './js/serever';

// import { number } from './js/serever';

// console.log(number);
// console.log(value);
// console.log(updateUserById);

//импорт пространства имен (импортируем все функции из файла export default)

// import * as apiServis from './js/serever';

// console.log(apiServis);

// import validatePassword from './js/validate-password';

// console.log(validatePassword);

// module.exports = {
//   entry: './path/to/my/entry/file.js',
// };
/***** */
// const path = require('path');

// module.exports = {
//   entry: './path/to/my/entry/file.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'my-first-webpack.bundle.js',
//   },
// };

// function component() {
//   const element = document.createElement('div');

//   // Lodash, currently included via a script, is required for this line to work
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   return element;
// }

// document.body.appendChild(component());

// import app from './js/app';

// console.log(app);
