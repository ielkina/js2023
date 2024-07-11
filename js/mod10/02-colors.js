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


  //1.57