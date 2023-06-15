//Работа с коллекцией массива

const friends = [
  { name: 'Mango', online: true },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: true },
  { name: 'Ajax', online: false },
];

console.table(friends);

//массив сложных типов в for..of получает ссылку на объект
for (const friend of friends) {
  console.log(friend.name);
  console.log(friend.online);
  friend.newprop = 555;
  console.log(friend.newprop);
}

console.table(friends);

//Ищем друга по имени

const findFriendDyName = function (allFriends, name) {
  for (const friend of allFriends) {
    console.log(friend.name);
    if (friend.name === name) {
      return true;
    }
  }
  return false;
};

console.log(findFriendDyName(friends, 'Poly'));
console.log(findFriendDyName(friends, 'Chesley'));
console.log(findFriendDyName(friends, 'Nike'));


//Получаем имена всех друзей
const getAllNames = function (allFriends) {
  const names = [];
  for (const friend of allFriends) {
    console.log(friend.name);
    names.push(friend.name);
  }
  console.log(names);
  return names;
};

console.log(getAllNames(friends));


//Получай имена только друзей которые онлайн
const getOnlineFriends = function (allFriends) {
  const onlineFriends = [];

  for (const friend of allFriends) {
    // console.log(friend);
    // console.log(friend.online);
    if (friend.online) {  //не сравнивать с true и false плохая практика, online само по себе уже является true или false
      // onlineFriends.push(friend); //массив с объектом друга
      onlineFriends.push(friend.name); //массив только с именем
      // onlineFriends.push(friend, friend.name); //массив и с тем и с другим
    }
  }

  return onlineFriends;
};

console.log(getOnlineFriends(friends));

//Получай имена только друзей которые офлайн
const getOfflineFriends = function (allFriends) {
  const offlineFriends = [];

  for (const friend of allFriends) {
    if (!friend.online) {
      offlineFriends.push(friend);
    }
  }
  return offlineFriends;
};

console.log(getOfflineFriends(friends));

//получить обьект с массивами по статусу
const getFriendsByOnlineStatus = function (allFriends) {
  const friendsByStatus = {
    online: [],
    offline: [],
  };
  for (const friend of allFriends) {
    // console.log(friend);
    if (friend.online) {
      friendsByStatus.online.push(friend);
      continue;
    }
    friendsByStatus.offline.push(friend);
    //или
    // const key = friend.online ? 'online' : 'offline'
    // friendsByStatus[key].push(friend);
  }

  return friendsByStatus;
};

console.table(getFriendsByOnlineStatus(friends));

//количество свойств в обьекте
const x = {
  a: 10,
  b: 10,
  c: 10,
  d: 10,
};

console.log(Object.keys(x).length);