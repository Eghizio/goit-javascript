var avg = function (nums) { return nums.reduce(function (s, n) { return s + n; }, 0) / nums.length; };
var toFixedDecimals = function (num) { return parseFloat(num.toFixed(2)); };
function getRating() {
    var score = avg(this.grades) + (this.testScore * 10) + (this.presence * 4);
    var normalized = score / 20;
    return toFixedDecimals(normalized);
}
var adam = {
    grades: [2, 4, 3, 5, 6, 1, 4, 3, 3],
    testScore: 0.56,
    presence: 0.69,
    getRating: getRating
};
var beth = {
    grades: [2, 4, 3, 5, 6, 1, 4, 3, 3],
    testScore: 0.56,
    presence: 0.69,
    getRating: getRating
};
var calculateStudentsAverageRating = function (students) { return toFixedDecimals(avg(students.map(
// we expect "student" to have "getRating" method
// if the "student" object won't have it, we have an error
function (student) { return student.getRating(); }))); };
var rating = calculateStudentsAverageRating([adam, beth]);
console.log(rating);
