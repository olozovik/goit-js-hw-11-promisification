const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: false },
];

const toggleUserState = (allUsers, username) => {
  return new Promise((resolve, reject) => {
    const updatedUsers = allUsers.map(user =>
      user.name === username ? { ...user, active: !user.active } : user,
    );
    resolve(updatedUsers);
  });
};

// The function should work like this
toggleUserState(users, 'Mango').then(console.table);
toggleUserState(users, 'Ajax').then(console.table);
