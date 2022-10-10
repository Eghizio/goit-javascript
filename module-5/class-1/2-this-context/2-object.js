// Object scope "this"

const user = {
  name: "John",
  whatIsThis: function whatIsThis() {
    console.log(this);
  }
};

user.whatIsThis();



// Changing "this" based on the context
console.clear();

function whatIsThis() {
  console.log(this);
}

whatIsThis();

const anotherUser = {
  name: "Not John",
  whatIsThis,
};

whatIsThis();
anotherUser.whatIsThis();


anotherUser.butSeriouslyWhatIsThis = whatIsThis;

anotherUser.butSeriouslyWhatIsThis();
