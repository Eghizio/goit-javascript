// Private properties

// utils
const avg = (nums) => nums.reduce((s, n) => s + n, 0) / nums.length;
const toFixedDecimals = (num) => parseFloat(num.toFixed(2));


class Student {
  name;
  #grades;
  #testScore;
  #presence;

  constructor(name, grades, testScore, presence) {
    this.name = name;
    this.#grades = grades;
    this.#testScore = testScore;
    this.#presence = presence;
    this.rating = this.#getRating();
  }

  getTestScore() {
    return this.#testScore;
  }

  get testScore() {
    return this.#testScore;
  }

  set testScore(newTestScore) {
    console.log("Cannot change test score!");
  }

  getGrades() {
    return [...this.#grades]; // copy
  }

  get grades() {
    return [...this.#grades];
  }

  #getRating() {
    const score = avg(this.#grades) + (this.#testScore * 10) + (this.#presence * 4);
    const normalized = score / 20;
    return toFixedDecimals(normalized);
  }
}


const adam = new Student("Adam", [4, 5, 6, 4, 5, 3, 2, 5, 4], 0.75, 0.92);

console.log(adam.rating);
adam.rating = 1;
console.log(adam.rating);



// Getters and setters
console.clear();

// let adamsTestScore = adam.getTestScore();
// adamsTestScore = 1;
// console.log(adam.getTestScore());

// let adamsGrades = adam.getGrades();
// adamsGrades.push(6, 6, 6, 6, 6, 6, 7);
// console.log(adam.getGrades());
// console.log(adamsGrades);


// Getter
let adamsGrades = adam.grades;
adamsGrades.push(6, 6, 6, 6, 6, 6, 7);
console.log(adam.getGrades());
console.log(adamsGrades);

// Setter
let adamsTestScore = adam.testScore;
adamsTestScore = 1;
console.log(adam.getTestScore());

adam.testScore = 1;
console.log(adam.getTestScore()); // 0.75
