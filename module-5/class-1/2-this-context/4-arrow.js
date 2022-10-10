// arrow function "this"

const whatIsThisInArrow = () => {
  console.log(this);
};

whatIsThisInArrow();


const user = { name: "Maybe John" };

user.showContext = whatIsThisInArrow;

user.showContext();



// Arrow fn takes context based on where it is declared
console.clear();


const someObject = {
  someProperty: "some value",
  arrow: () => console.log("arrow: ", this),
  normalFunction() {
    const nestedArrow = () => {
      console.log("nestedArrow: ", this);
    };

    nestedArrow();
    console.log("normalFunction: ", this);
  },
};

someObject.arrow();
someObject.normalFunction();
