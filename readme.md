# [Модуль 1](https://github.com/ielkina/js2023/tree/main/js/mod1)

# урок 1

# План занятия

# Введение

- Поставить **Prettier** и убить **Beautiful**
- Все ущ используем **:LiveServer**
- Отступы 2 и 4 пробела с **Prettier**# JavaScript-2023
- Подсветка скобок
- Выкинуть из головы HTML и CSS
- Что такое JS и как он выполняется в браузере
  - Движок
  - Интерпретатор
  - Синхронность кода
- Всегда виноваты Вы - в отличии от вас машина не думает
- Не зубрим, разбираемся, тогда все будет хорошо

# ESM в браузере

- Подключение скрипта через тег `script[type="module"]`
- Ведра (файлы), защитные контейнеры (модули) и бассейн кода.
- Implicit strict mode

# Синтаксис

- Выражения, инструкции и точки с запятой
- Примирение:
  - Объявление let и const
- Получение данных от пользователя
  - prompt и config
- Числа
  - Мат. операторы
  - Объекты Number и Math

# урок 2

# План занятия

- Switch
- Цикл For
- Задачи
- Codewars
- DOM

# [Модуль 2](https://github.com/ielkina/js2023/tree/main/js/mod2)

# урок 1

# План занятия

- Массив знакомство
- Ссылочный тип
- Практика

# урок 2

# План занятия

- Знакомство с функциями
- Стек вызовов
- Поиск ошибок
- Практика

# [Модуль 3](https://github.com/ielkina/js2023/tree/main/js/mod3)

# урок 1

# План занятия

- Объекты,создание через литерал
- Свойства и методы объекта
- this в методах объекта при обращении к свойствам
- Перебор объектов for ... in и методы Object.keys|values|entries

# урок 2

# План занятия

- Операция spread
- Реструктуризация и операция rest

# [Модуль 4](https://github.com/ielkina/js2023/tree/main/js/mod4)

# урок 1

# План занятия

- Callback функции
- Замыкание
- Стрелочные функции

# урок 2

# План занятия

- Методы массивов:
  - forEach
  - map
  - filter
  - find
  - every and some
  - reduce
  - sort
- Чейнинг методов
- [Библиотека Lodash](https://lodash.com/docs/4.17.15)

# [Модуль 5](https://github.com/ielkina/js2023/tree/main/js/mod5)

# урок 1

# План занятия

- Прототипное наследование
- Прототип обьекта Object.create()
- Создание обьекта через new - функция - конструктор
- Статические методы и свойства

# урок 2

# План занятия

# [Модуль 6](https://github.com/ielkina/js2023/tree/main/js/mod6)

# урок 1

# План занятия

- ОбЪекты Window и document
- Поиск DOM-узлов с querySelector и querySelectorAll
- Свойство TextContext
- Свойства "навигации" по DOM-узлам
- Работа с classList и атрибутам
- Создание узлов
- Вставка узлов: appendChild, insertBefore, append, prepend и т.д
- Парс строки: innerHTML и insertAdjacentHTML

# урок 2

# План занятия

- Событие
- Создание и удаление слушателей
- Объект события
- Поведение по умолчание
- основные событие мыши, форм, клавиатуры
- [Список всех доступных Событий](https://developer.mozilla.org/ru/docs/web/Events)

# [Модуль 7](https://github.com/ielkina/js2023/tree/main/js/mod7)

# урок 1

# План занятия

- Распространение событий
- Делегирование событий

# урок 2

# План занятия

- Chatty events (болтливые события)
- Приемы throttle и debounce с lodash
- [Ленивая загрузка изображения](https://web.dev/native-lazy-loading)
  - Нативная с атрибутом loading
  - Библиотека [lazysizes]()

![EditorConfig](https://github.com/pepelsbey/pepelsbey.dev/actions/workflows/editorconfig.yml/badge.svg)
![HTML](https://github.com/pepelsbey/pepelsbey.dev/actions/workflows/html.yml/badge.svg)
![CSS](https://github.com/pepelsbey/pepelsbey.dev/actions/workflows/css.yml/badge.svg)
![JavaScript](https://github.com/pepelsbey/pepelsbey.dev/actions/workflows/javascript.yml/badge.svg)

# [Модуль 8](https://github.com/ielkina/js2023/tree/main/js/mod8)

# урок 1

# План занятия

- Терминал

  - [Шпаргалка 1](https://tproger.ru/translations/bash-cheatsheet)
  - [Шпаргалка 2](https://habr.com/ru/company/ruvds/blog/445270/)
  - Открыть
    - `option + ~`
    - `view > terminal`
    - через палитру `command + shift + p`
  - Основные полезные команды

    - путь (pwd) путь, адрес директории где открыт терминал
    - навигация (cd)
    - очистка `clear` или `control + l`
    - лист (ls), ls js/ - список файлов папки js/
    - скрытые файлы (ls -la),
    - создание файлов(touch), touch ./source/index.js - создание файла в папке source
    - создание папок(mkdir), создает только одну папку
    - переименование/перемещение (mv), mv index.js main.js
    - удаление (rm, rm -r), rm -rf css/ - удаление папку со всем контентом, rm dir - удаляет пустую папку
    - информация про консольные команды (command name --help, man command name)

- Node.js и npm

  с терминала переходим в папку папке js/mod8/node-tut/ И в терминале запускаем командой $ node index.js фаил

  - установка
  - инициализация и package.json
  - [npmjs.com](https://www.npmjs.com/)
  - [Шпаргалка](https://habr.com/ru/companies/ruvds/articles/458504/)(https://habr.com/ru/articles/133363/)
  - работа с пакетами
    - установка
    - удаление
  - CommonJS модули
  - npm-скрипты
    - команды для терминала npm run dev(команда юзера прописанная в package.json)
    - команды npm start и npm test прописываются без run
    - pre(prestart, pretest) запуск скрипта перед основным файлом команды start и post тоже самое только после.

- Таблица кода

  - [Babel](https://babeljs.io/)
  - CLI и npm-скрипты
  - Пресеты
  - [Browserslist](https://github.com/browserslist/browserslist)

- [сборщик Parcel](https://parceljs.org/)

- [ECMAScript модули](https://exploringjs.com/impatient-js/ch_modules.html)

- [Webpack](https://webpack.js.org/)
  - точка входа
  - точка выхода
  - загрузчики
  - плагины

# урок 2

# План занятия

- WebStorage API JSON
- Выведение в шаблонизацию
  - [Пакет для Parcel](https://www.npmjs.com/package/parcel-plugin-handlebars-precompile)
- Билд в production
  - root link
  - [Public url](https://parceljs.org/features/targets/#publicurl)(https://parceljs.org/cli.html#set-the-public-url-to-server-on)
  - [Структура папок для Parcel (плагин)](https://github.com/VladimirMikulic/parcel-plugin-custom-dist-structure)

# [Модуль 9](https://github.com/ielkina/js2023/tree/main/js/mod9)

# урок 1

# План занятия

- Асинхронность в JavaScript
  - Однопоточность и многопоточность
  - отложенные вызовы (планирование)
  - Web workers для "многопоточность"
  - Service workers для "перехвата" запросов от документа (кеширование)
  - [Статьи](https://bitsofco.de/web-workers-vs-service-workers-vs-worklets/)
- Планирование: Window.setTimeout() и window.setInterval()
- Цикл событий (event loop)
  - [Площадка]()
  - setTimeout(N) и setTimeout(0)
- Мастерская: оповещение
- Мастерская: "надоедалка" подписки
  - Bootstrap для CSS
  - Bootstrap Native для JS
- Встроенный обьект Date
  - Создание
  - Разница времени
  - Date.now() и new Date().getTime()
  - [Библиотека date-fns]()
- Мастерская: таймер

# урок 2

# План занятия

# [Модуль 10](https://github.com/ielkina/js2023/tree/main/js/mod10)

# урок 1

# План занятия

# урок 2

# План занятия

# [Модуль 11](https://github.com/ielkina/js2023/tree/main/js/mod11)

# урок 1

# План занятия

# урок 2

# План занятия

https://ielkina.github.io/js2023/
