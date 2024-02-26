/* Array.prototype.flat(callback)
- Разглаживает массив до указанной глубины
- По умолчанию глубина 1
*/
const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];
console.log(array.flat(3));

/* Array.prototype.flatMap(callback)
- комбинация map  и flat
*/

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['js', 'nodejs'] },
  { id: '002', likes: 17, tags: ['js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['js', 'nodejs'] },
  { id: '004', likes: 5, tags: ['js', 'nodejs'] },
];

const tags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
console.log(tags);
const tags1 = tweets.map(t => t.tags).flat();
console.log(tags1);
//тоже самое
const tags2 = tweets.flatMap(t => t.tags);
console.log(tags2);

const stats = tags.reduce(
  (acc, tag) => ({ ...acc, [tag]: acc[tag] ? acc[tag] + 1 : 1 }),
  {}
);
console.log(stats);

const stats1 = tweets
  .flatMap(t => t.tags)
  .reduce(
    (acc, tag) => ({
      ...acc,
      [tag]: acc[tag] ? acc[tag] + 1 : 1,
    }),
    {}
  );
