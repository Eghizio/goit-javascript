// every - checks if every item in the array passes the test
console.clear();

const courseStudents = [
  { name: "Adam", age: 42 },
  { name: "Aneta", age: 70 },
  { name: "Andrzej", age: 20 },
  { name: "Agata", age: 19 },
  { name: "Amelia", age: 17 },
];

const isEveryStudentA = courseStudents.every(student => student.name.startsWith("A"));
console.log("Every student starts with A: ", isEveryStudentA);

const isEveryStudentAdult = courseStudents.every(({ age }) => age > 18);
console.log("Every student is an adult: ", isEveryStudentAdult);



// some - checks if at least one item in the array passes the test
const isAtLeastOneUnderage = courseStudents.some(({ age }) => age < 18);
console.log("At least one underage: ", isAtLeastOneUnderage);

const isAtLeastOneStartingWithD = courseStudents.some(({ name }) => name.startsWith("D"));
console.log("At least one starting with D: ", isAtLeastOneStartingWithD);
