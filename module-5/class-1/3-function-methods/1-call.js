// "call" function method

function printMessage(message) {
  console.log(`[${this.name}]: ${message}`);
}

const adam = { name: "Adam" };
const beth = { name: "Beth" };

printMessage("Hello world");

// call a function, for this object, with given arguments
printMessage.call(adam, "Hello there");
printMessage.call(beth, "Oh hi Mark");
