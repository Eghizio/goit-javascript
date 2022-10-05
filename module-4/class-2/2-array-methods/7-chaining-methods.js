// Chaining methods together
console.clear();

const students = [
  { name: "Maciek", score: 83, courses: ["matematyka", "fizyka"] },
  { name: "Paula", score: 59, courses: ["informatyka", "matematyka"] },
  { name: "Artur", score: 37, courses: ["fizyka", "biologia"] },
  { name: "Kasia", score: 94, courses: ["literatura", "informatyka"] },
];

// sort + map
const namesByAscendingScore = [...students].sort((a, b) => a.score - b.score).map(s => s.name);
console.log(namesByAscendingScore);

const uniqueCoursesAlphabetically = students
  .flatMap(student => student.courses) // transform to flat array of courses
  .filter((course, i, arr) => arr.indexOf(course) === i) // keep only unique ones
  .sort((a, b) => a < b ? -1 : 1); // sort alphabeticaly, "a" is lower than "b" // ASCI codes

// we didn't copy [...students] this time, because flatMap does not mutate original array
// flatMap as well as filter returns a new array that we can safely operate on
// so we can sort safely because of that
// We work on a new array that is only used here so we can mutate it

console.log(uniqueCoursesAlphabetically);



// Let's have some fun ;)
console.clear();

const filterUnique = (letter, i, arr) => arr.indexOf(letter) === i;
const sortAlphabetically = (a, b) => a < b ? -1 : 1

const uniqueLetters = students
  .flatMap(({ name, courses }) => [name, ...courses])
  .flatMap(text => text.split(""))
  .map(letter => letter.toUpperCase())
  .filter(filterUnique)
  .sort(sortAlphabetically);

console.log(uniqueLetters);


const uniqueChars = students.reduce((chars, { name, courses }) => {
  const letters = [name, ...courses].join("").toLowerCase().split("");
  return [...chars, ...letters];
}, [])
  .filter(filterUnique)
  .sort(sortAlphabetically);

console.log(uniqueChars);

console.log(uniqueLetters.join(""), uniqueChars.join(""));
console.log(uniqueLetters.join("").toLowerCase() === uniqueChars.join(""));



const allChars = students.reduce((chars, { name, courses }) => {
  const letters = [name, ...courses].join("").toLowerCase().split("");
  return [...chars, ...letters];
}, []);

console.log("All chars: ", allChars);

const lettersCensus = allChars.reduce((census, letter) => {
  const value = census[letter] ?? 0;

  census[letter] = value + 1;

  return census;
}, {});

// or
const census = allChars.reduce((census, letter) => ({ ...census, [letter]: (census[letter] ?? 0) + 1 }), {});
// or
const c = allChars.reduce((acc, el) => ({ ...acc, [el]: acc[el] + 1 || 1 }), {});

console.log("1 Census", lettersCensus);
console.log("2 Census", census);
console.log("3 Census", c);


const howManyUniqueLetters = Object.keys(lettersCensus).length;
const howManyLettersTotal = Object.values(lettersCensus).reduce((sum, num) => sum + num, 0);

console.log({ howManyUniqueLetters, howManyLettersTotal });


// reduce as map
const x = [1, 2, 3, 4, 5];

const doubles = x.reduce((acc, el) => [...acc, el * 2], []);
console.log(doubles);
