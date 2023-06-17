const profile = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios. Jamaica',
  avatar:
    'https://4.bp.blogspot.com/-sUqTEIK-QLc/UzfYaIs52YI/AAAAAAAAA6s/l3adavX9xyk/s1600/clAvHWVG4GE.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const makeProfileMarkup = function (userProfile) {
  const {
    name,
    tag,
    avatar = 'https://4.bp.blogspot.com/-sUqTEIK-QLc/UzfYaIs52YI/AAAAAAAAA6s/l3adavX9xyk/s1600/clAvHWVG4GE.jpg',
    location = 'Planet Earth',
    stats: { followers, views, likes },
  } = userProfile;
  return `
    <div>
      <img src="${avatar}" alt="user avatar" />
      <p>${name}<span>@${tag}</span></p>
      <p>Location: ${location}</p>
      <ul>
        <li>Followers: ${followers}</li>
        <li>Views: ${views}</li>
        <li>Likes: ${likes}</li>
      </ul>
    </div>`;
};

const markup = makeProfileMarkup(profile)

console.log(markup);
document.body.insertAdjacentHTML('afterbegin', markup)