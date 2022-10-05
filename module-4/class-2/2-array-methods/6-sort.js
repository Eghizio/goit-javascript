// sort - sorts the array based on the compare function (it DOES mutate the original array)
console.clear();

const courseStudents = [
  { name: "Dorota", age: 19 },
  { name: "Barbara", age: 70 },
  { name: "Ewa", age: 17 },
  { name: "Adam", age: 42 },
  { name: "Cyprian", age: 20 },
];


// Let's use some of the new tricks cause we are lazy ;)
const ages = courseStudents.map(student => student.age);
console.log("Before sorting: ", ages);

// ages.sort();


// pure sorting - won't mutate the original array
const sortedAges = [...ages].sort();

console.log("After sorting: ", ages);
console.log(sortedAges);



// Compare function
console.clear();

const sortedNumbers = [5, 4, 6, 2, 1, 3, 7].sort((a, b) => a - b);
console.log("Numbers: ", sortedNumbers);


const sortAscending = (a, b) => a - b; // negative value will place "a" before "b"
const ascending = [...ages].sort(sortAscending);
console.log("Ascending: ", ascending);

const sortDescending = (a, b) => b - a;
const descending = [...ages].sort(sortDescending);
console.log("Descending: ", descending);




// Object sorting
const byAgeAscending = (a, b) => a.age < b.age ? -1 : 1;
const studentsSortedByAge = [...courseStudents].sort(byAgeAscending);
console.log("Students ascending by age: ", studentsSortedByAge);

const byNameDescending = (a, b) => a.name > b.name ? -1 : 1;
const studentsSortedByName = [...studentsSortedByAge].sort(byNameDescending);
console.log("Students descending by name: ", studentsSortedByName);


console.log("a < b", "a" < "b");
console.log("a < A", "a" < "A");
