const somePromise = new Promise((resolve, reject) => {
  const isSuccess = Math.random() >= 0.5;
  // const isSuccess = true;

  setTimeout(() => {
    if (isSuccess) {
      // resolve("Great succcess!");
      resolve(42);
    } else {
      reject("Failure :(");
    }
  }, 1200);
});



// console.log(somePromise);
// somePromise.substring(0, 5);

// setTimeout(() => {
//   console.log(somePromise);
//   // console.log(somePromise.value);
// }, 3000);




// let value = null;
// const abc = somePromise.then((promisedValue) => {
//   console.log("then:", promisedValue);
//   value = promisedValue;
// });

// console.log("abc:", abc);
// console.log("value:", value);

// setTimeout(() => {
//   console.log(value);
// }, 3000);

// somePromise.then(console.log).catch(console.error);


somePromise
  // .then(console.log)
  .then(val => console.log(val)) // void = undefined
  .then(val => {
    const double = val + 2; // undefined + 2
    console.log(double); // NaN
  })
  .catch(error => console.error("Ooopsie", error))
  .finally(() => console.log("Promise finished!"));


