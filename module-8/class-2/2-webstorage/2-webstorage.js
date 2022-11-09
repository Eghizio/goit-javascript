
// const data = [42, 1337];

// localStorage.setItem("data", JSON.stringify(data));

// const retrievedData = localStorage.getItem("data");
// console.log(retrievedData, typeof retrievedData);
const retrievedData = JSON.parse(localStorage.getItem("data"));
console.log(retrievedData, typeof retrievedData);

localStorage.clear();

