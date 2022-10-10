// "apply" function method

function printMessage(message) {
  console.log(`[${this.name}]: ${message}`);
}

const adam = { name: "Adam" };
const beth = { name: "Beth" };

printMessage("Hello world");

// apply for a function, for this object, with given arguments array
printMessage.apply(adam, ["Hello there"]);
printMessage.apply(beth, ["Oh hi Mark"]);



// call vs apply
console.clear();

printMessage.call(adam, ...["Hello there"]);

const bethArgs = ["Oh hi Mark"];
printMessage.apply(beth, bethArgs);
printMessage.call(beth, ...bethArgs);
