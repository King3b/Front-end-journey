const users = [
  { username: "admin", role: "admin", active: true },
  { username: "john", role: "user", active: true },
  { username: "jane", role: "user", active: false },
  { username: "mod", role: "moderator", active: true },
  { username: "ghost", role: "user", active: false },
];
const getActiveUsers = (userList) =>
  userList
    .filter((user) => user.active)
    .filter((user) => user.role === "admin" || user.role === "moderator")
    .map((user) => user.username);

console.log(getActiveUsers(users)); // Output: ['admin', 'mod']
