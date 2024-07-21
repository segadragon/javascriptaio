const user = { username: "funguy37", password: "123456" };

const logInStatus = login(user);
console.log(logInStatus);
console.warn(`The password is now ${user.password}`);

function login(userCredentials) {
  if (userCredentials.password === "123456") {
    let randomString = Math.random().toString(36).slice(-16);
    userCredentials.password = randomString;
    return `Terrible password. Your password has been reset to a random string.`;
  }
  return `Logged in`;
}
