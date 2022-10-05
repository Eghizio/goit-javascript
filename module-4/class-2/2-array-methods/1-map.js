// map - maps array to new values
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);

const multiplyByThree = x => x * 3;
const tripled = numbers.map(multiplyByThree);

console.log("Numbers", numbers);
console.log("Doubled", doubled);
console.log("Tripled", tripled);

const doubleEvens = numbers.map(num => num % 2 ? num : num * 2);

console.log(doubleEvens);


// Transforming (mapping) the object array into array of specific values of the objects
console.clear();

const users = [
  { name: "Adam", age: 42 },
  { name: "Beth", age: 37 },
  { name: "Cathy", age: 21 },
  { name: "Dorthy", age: 69 },
];

const userNames = users.map(user => user.name);
console.log(userNames);



// flatMap - maps and flattens the result by depth of 1
console.clear();

const students = [
  { name: "Adam", courses: ["Math", "Physics"], grades: [[1, 1, 1], [2, 2, 2]] },
  { name: "Beth", courses: ["Biology", "Chemistry"], grades: [[3, 3, 3], [4, 4, 4]] },
  { name: "Cathy", courses: ["IT", "PE"], grades: [[5, 5, 5], [6, 6, 6]] },
];

// const mappedCourses = students.map(student => student.courses);
// const courses = students.flatMap(student => student.courses);

// console.log("Mapped:", mappedCourses);
// console.log("Flat courses:", courses);

const nestedGrades = students.flatMap(student => student.grades);
const flattenedGrades = nestedGrades.flat();

console.log("Nested grades:", nestedGrades);
console.log("Flattened grades", flattenedGrades);

const filteredGrades = flattenedGrades.flatMap(grade => grade > 3 ? grade : []);
console.log(filteredGrades)
