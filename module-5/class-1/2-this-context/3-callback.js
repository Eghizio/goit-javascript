// "this" and callback functions

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

// Hmmmm
// oopsie
// We will fix it soon
