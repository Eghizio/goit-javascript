const student = {
  "id": "xyz",
  "name": "John Doe",
  "age": 20,
  "year": 2,
  "grades": [
    5,
    4,
    3,
    4,
    5,
    3
  ],
  "isSober": true,
  "address": {
    "country": "Poland",
    "city": "Sopot"
  },
  "degree": null,
};

console.log(student);


// const date = new Date();
// const serializedDate = date.toISOString();
// console.log(serializedDate);
// const deserializedDate = new Date(serializedDate);
// console.log(deserializedDate);



const studentJSON = JSON.stringify(student, null, 4);
console.log(studentJSON);
// console.log(JSON.stringify(student, null, 12));


// const onlyNumbers = (key, value) => typeof value === "number" ? value : undefined
// // console.log(JSON.stringify(student, onlyNumbers, 2));
// const fn = JSON.stringify(onlyNumbers);
// console.log(fn);


const serializedDataContainer = document.querySelector("pre#serialized-data");

// serializedDataContainer.textContent = student;
serializedDataContainer.textContent = studentJSON;



const savedData = serializedDataContainer.textContent;

console.log(savedData);

const deserializedData = JSON.parse(savedData);
console.log(deserializedData);



console.clear();

const list = [42];

console.log(list, typeof list);

const stringifiedList = JSON.stringify(list);
console.log(stringifiedList, typeof stringifiedList);

const parsedList = JSON.parse(stringifiedList);
console.log(parsedList, typeof parsedList);


console.clear();
const randomData = JSON.stringify(() => null);


try {
  console.log(JSON.parse(randomData));
} catch (error) {
  console.log({ error });
} finally {
  console.log("Parsing complete");
}


const isParsable = (data) => {
  try {
    console.log("Trying to parse: ", data);
    JSON.parse(data);
    return true;
  } catch (error) {
    console.log({ error });
    return false;
  } finally {
    console.log("Parsing attempt complete!");
    console.log();
  }
};

console.log("Parsable:", isParsable(() => null));
console.log("Parsable:", isParsable(null));







