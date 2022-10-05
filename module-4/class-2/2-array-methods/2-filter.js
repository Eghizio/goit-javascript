// filter - accepts only values that passes the test
console.clear();

const grades = [14, 17, 84, 24, 31, 28, 55, 51, 81, 7, 20, 81];

const passingGrades = grades.filter(grade => grade >= 50);
console.log(passingGrades);


// Filtering unique values
console.clear();

const letters = ["A", "B", "A", "C"];

const uniqueLetters = letters.filter(
  (letter, i, arr) => arr.indexOf(letter) === i
);
console.log(uniqueLetters);


// Filtering object arrays
console.clear();

const goitStudents = [
  { name: "A", grade: 14 },
  { name: "B", grade: 17 },
  { name: "C", grade: 84 },
  { name: "D", grade: 24 },
  { name: "E", grade: 31 },
  { name: "F", grade: 28 },
];

const isPassing = ({ grade }) => grade >= 50;
const passingStudents = goitStudents.filter(isPassing);
console.log(passingStudents, passingStudents.map(({ name }) => name));