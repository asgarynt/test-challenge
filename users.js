// Imports small array of users
// Pretend it's an API request
const users = require("./data");

// Fetches all users
const getUsers = () => users;

// Filters users by specific ID
const getUser = (id) => users.find((user) => user.id === id);

// test
//console.log(getUser(3).id);
module.exports = { getUsers, getUser };
