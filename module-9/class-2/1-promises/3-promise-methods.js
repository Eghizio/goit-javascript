const createPromise = (value, timeout = 1000, willFail = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (willFail) reject("Failure");
      resolve(value);
    }, timeout);
  });
};

// const promises = [
//   createPromise("First promise", 1000),
//   createPromise("Second promise", 2000, true),
//   createPromise("Third promise", 3000),
// ];

// promises.forEach(promise => promise.then(val => console.log(val)));

// Promise.all(promises)
//   .then(values => console.log(values))
//   .catch(err => console.error(err));

// Promise.race(promises)
//   .then(val => console.log(val))
//   .catch(err => console.error(err));


// // resolve/reject static methods
// new Promise(resolve => resolve(42)).then(console.log);
// Promise.resolve(42).then(console.log);


// new Promise((_, reject) => reject("Ooopsie")).then(console.error);
// Promise.reject("Ooopsie").then(console.error);



// Promisify using static methods
const logIn = (login, password) => {
  if (login === "admin" && password === "admin") {
    return Promise.resolve("Access granted!");
  }

  return Promise.reject("No permissions");
};

// logIn("admin", "admin")
//   .then(console.log)
//   .catch(console.error);

// const asyncFn = async () => {
//   const pwd = prompt("Provide a password");
//   try {
//     const resultMessage = await logIn("admin", pwd);

//     console.log("Result:", resultMessage);
//   } catch (error) {
//     console.error(error);
//   }
// };

const asyncFn = async () => {
  const pwd = prompt("Provide a password");
  const resultMessage = await logIn("admin", pwd).catch(console.error);

  console.log("Result:", resultMessage);
};

asyncFn();
