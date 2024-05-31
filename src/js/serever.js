const fetchAllUsers = () => {
  console.log(`fetchAllUsers`);
};

const fetchUserById = id => {
  console.log(`fetchUserById`);
};

export default { fetchAllUsers, fetchUserById };

//отдельно экспортируем функцию
export const updateUserById = id => {
  console.log(`update`);
};

export const number = 5;
