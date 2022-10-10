// "bind" function method

function greet(name) {
  console.log(`${name}, welcome to ${this.service}`);
}

const steam = { service: "Steam" };
const gmail = { service: "Gmail" };

const steamGreeter = greet.bind(steam);
const gmailGreeter = greet.bind(gmail);

steamGreeter("Adam");
gmailGreeter("Beth");

console.log({ steam, gmail });



// Fixing previous callback problem
console.clear();

const username = {
  firstName: "Adam",
  lastName: "Małysz",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(username.getFullName());

function sendMessageTo(callback) {
  const fullName = callback();
  console.log(`Sending message to ${fullName}.`);
}

sendMessageTo(username.getFullName);

// We can fix it using function methods we just learned
// Such as "bind" to bind the object as the context of the function
sendMessageTo(username.getFullName.bind(username));