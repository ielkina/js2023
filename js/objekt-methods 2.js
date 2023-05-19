//Методы объекта и this при обращении к свойствам в методах

//http://fecore.net.ua/boock/m5ph3r-javascript/module-03/images/context.jpg

// changeName
// addTrack
// updateRating
// getTrackCount

const playlist = {
  name: 'Мой супер плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  trackCount: 3,
  //олдскул
  // getName: function (a) {
  //   console.log('+', a);
  // }
  //или
  getName(a) {
    console.log('+', a);
  },
  changeName(newName) {
    // console.log('this внутри changeName', this);
    //this ссылка на тот объект который нужно изменить
    //в данной функции меняем свойства ключа name
    this.name = newName;
  },
  addTrack(track) {
    this.tracks.push(track);
    this.trackCount = this.tracks.length;
  },
  updateRating(newRating) {
    this.rating = newRating;
  },
  getTrackCount() {
    return this.tracks.length;
  },
};

// playlist.getName(5);
playlist.changeName('Новое имя');
console.log(playlist.getTrackCount());

playlist.addTrack('трек-4');
console.log(playlist.getTrackCount());

playlist.addTrack('трек-5');
console.log(playlist.getTrackCount());

playlist.updateRating(10);
// playlist.getTrackCount();
console.log(playlist);
//внутри методов объекта никогда не использовать имя самого объекта
