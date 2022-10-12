const avg = (nums: number[]) => nums.reduce((s, n) => s + n, 0) / nums.length;
const toFixedDecimals = (num: number) => parseFloat(num.toFixed(2));

// Defines how the object looks like and what does it contains
interface Student {
  grades: number[];
  testScore: number;
  presence: number;
  getRating: () => number;
}

function getRating() {
  const score = avg(this.grades) + (this.testScore * 10) + (this.presence * 4);
  const normalized = score / 20;
  return toFixedDecimals(normalized);
}

const adam: Student = {
  grades: [2, 4, 3, 5, 6, 1, 4, 3, 3],
  testScore: 0.56,
  presence: 0.69,
  getRating
};
const beth = {
  grades: [2, 4, 3, 5, 6, 1, 4, 3, 3],
  testScore: 0.56,
  presence: 0.69,
  getRating
};


const calculateStudentsAverageRating = (students: Student[]) => toFixedDecimals(
  avg(
    students.map(
      // we expect "student" to have "getRating" method
      // if the "student" object won't have it, we have an error
      student => student.getRating()
    )
  )
);

const rating = calculateStudentsAverageRating([adam, beth]);
console.log(rating);