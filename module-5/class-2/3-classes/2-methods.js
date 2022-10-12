// Class methods

// utility functions
const avg = (nums) => nums.reduce((s, n) => s + n, 0) / nums.length;
const toFixedDecimals = (num) => parseFloat(num.toFixed(2));


// Recipe for student
class Student {
  constructor(name, grades, testScore, presence) {
    this.name = name;
    this.grades = grades;
    this.testScore = testScore;
    this.presence = presence;
  }

  getRating() {
    const score = avg(this.grades) + (this.testScore * 10) + (this.presence * 4);
    const normalized = score / 20;
    return toFixedDecimals(normalized);
  }
}


const adam = new Student("Adam", [4, 5, 6, 4, 5, 3, 2, 5, 4], 0.75, 0.92);
const beth = new Student("Beth", [4, 5, 2, 3, 6, 6, 1], 0.70, 0.99);

console.log("Adam rating: ", adam.getRating());
console.log("Beth rating: ", beth.getRating());

const students = [
  adam,
  beth,
  new Student("Cecil", [5, 4, 3, 5, 2, 5, 3, 6], 0.8, 0.89),
  new Student("Dorthy", [3, 4, 6, 4, 2, 3, 3, 6], 0.84, 0.79),
];

const calculateStudentsAverageRating = (students) => toFixedDecimals(
  avg(
    students.map(
      student => student.getRating()
    )
  )
);

const groupRating = calculateStudentsAverageRating(students);
console.log(groupRating);
