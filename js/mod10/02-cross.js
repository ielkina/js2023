/**
 * - Cross-Origin Resource Sharing (CORS)
 *  https://pokeapi.co/
 * - Proxy
 *  Хранение API ключей и секретов
 *  api weawer service
 */

// import '**css/style';

fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
  .then(p => p.json())
  .then(console.log);

//* Cross-Origin Resource Sharing (CORS)
/** Один из механизмов защиты от атаки
 * Есть только в браузере
 * Водно по заголовку Access-Control-Allow-origin
 * Если API Server не потдерживает CORS, то с фронтенда ничего с этим сделать нельзя.
 * Почти все сервисы (API Server) расчетанны на то что к ним будут обращаться с другого бэкэнда а не из браузера напрямую
 */

//1.57
