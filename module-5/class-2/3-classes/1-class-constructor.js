// Class

// Class declaration
class User {

}

// instance of a class = object
const john = new User();

console.log(john);



// Constructor
console.clear();

class Student {
  constructor(name) {
    this.name = name
  }
}

const adam = new Student("Adam");

console.log(adam);

const beth = new Student("Beth");
const cecil = new Student("Cecil");

console.log(beth);
console.log(cecil);


// Object parameter pattern
console.clear();

class Employee {
  constructor({ name, position, sallary = 15000 }) {
    this.name = name;
    this.position = position;
    this.sallary = sallary;
  }
}

const dev = new Employee({
  position: "Software Developer",
  name: "Beth",
});

console.log(dev);

const ceo = new Employee({
  name: "John",
  position: "CEO",
  sallary: Infinity,
});

console.log(ceo);
