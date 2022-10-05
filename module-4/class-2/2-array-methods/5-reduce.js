// reduce - operates on values and stores an accumulator in between calls
console.clear();

const courseStudents = [
  { name: "Adam", age: 42 },
  { name: "Aneta", age: 70 },
  { name: "Andrzej", age: 20 },
  { name: "Agata", age: 19 },
  { name: "Amelia", age: 17 },
];

const totalAge = courseStudents.reduce((accumulator, currentStudent) => {
  return accumulator + currentStudent.age; // <- new accumulator value after each iteration
}, 0); // <- initial accumulator value

console.log("Total age: ", totalAge);



// Calculating average age of the students
const sum = nums => nums.reduce((total, num) => total + num, 0);
const avg = nums => sum(nums) / nums.length;

const averageAge = avg(courseStudents.map(student => student.age));
console.log("Average age: ", averageAge);



// filtering using reduce
const studentsAbove25 = courseStudents.reduce((students, currentStudent) => {
  const { age } = currentStudent;

  // if (age > 25) return [...students, currentStudent];

  // return students;

  // // even better
  return age > 25 ? [...students, currentStudent] : students;
}, []); // <- inital students as empty array


// const x = courseStudents.reduce((acc, student) => student.age > 25 ? [...acc, student] : acc, []);

console.log("Students above 25: ", studentsAbove25.map(s => s.age));
console.log("Students above 25: ", studentsAbove25);
// console.log("Students above 25: ", x);