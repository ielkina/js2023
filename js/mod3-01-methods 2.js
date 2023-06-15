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
    //под капотом функция
    console.log(a);
  },
  changeName(newName) {
    //внутри методов объекта никогда не использовать имя самого объекта
    //console.log('this внутри changeName', this);
    //this ссылка на тот объект который эту функцию вызвал
    //в данной функции меняем свойства ключа name
    //не использовать имя обьекта внутри метода обьекта, вместо этого нужно использовать ссылку (this) на этот обьект
    console.log((this.name = newName));
    // console.log(playlist.name);
  },
  addTrack(track) {
    this.tracks.push(track);
    this.trackCount = this.tracks.length;
   
    // console.log(playlist.tracks);
  },
  updateRating(newRating) {
    this.rating = newRating;
  },
  getTrackCount() {
    //  return this.tracks.length;
    //  return this.trackCount;

    return {trackCount: this.tracks.length}
  },
};

playlist.changeName('Новое имя');
console.log(playlist.getTrackCount());

playlist.addTrack('трек-4');
console.log(playlist.getTrackCount());

playlist.addTrack('трек-5');
console.log(playlist.getTrackCount());

playlist.updateRating(10);
playlist.getTrackCount();
//внутри методов объекта никогда не использовать имя самого объекта
console.log(playlist);
