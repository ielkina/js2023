
//установка плагина в папку проекта команды для терминала
// npm install -D tailwindcss
// npx tailwindcss init


//настройки файла конфигураций json

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}



//подключение в файле стилей
// @tailwind base;
// @tailwind components;
// @tailwind utilities;




//команда в терминале
// <!-- npx tailwindcss -i ./input.css -o ./output.css --watch -->
// <!-- npx tailwindcss -i ./input.css -o ./style.css --watch -->