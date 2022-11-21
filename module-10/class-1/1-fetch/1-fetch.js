const URL = "https://restcountries.com/v3.1/all";

fetch(URL, {
  method: "GET", // default method
  headers: {
    "Content-Type": "application/json"
  }
})
  .then(response => {
    if (!response.ok) throw new Error("There was an error!");

    console.log("Before:", response.bodyUsed);

    // return response.text(); // parsing body
    const parsedBody = response.json(); // promise of parsed body

    console.log("After:", response.bodyUsed);
    return parsedBody;
  })
  .then(body => {
    // console.log(typeof body);
    // console.log(body);

    const poland = body.find(({ cca2 }) => cca2 === "PL");
    // console.log(poland);
  })
  .catch(error => console.error(error))
  .finally(() => console.log("Request finished"));





const URLwithParam = "https://restcountries.com/v3.1/name/poland";

fetch(URLwithParam)
  .then(res => res.json())
  .then(data => {
    // console.log(data)
  })
  .catch(console.error);




const param = "ottawa";
const URLwithSearchQuery = `https://restcountries.com/v3.1/capital/${param}`;

// ?fields=name
const searchQuery = new URLSearchParams({ fields: "name" });
// console.log(searchQuery.toString())

const urlWithSearch = URLwithSearchQuery + "?" + searchQuery.toString();
// console.log(urlWithSearch);

fetch(urlWithSearch)
  .then(res => res.json())
  .then(data => {
    // console.log(data)
  })
  .catch(console.error);




const getUsers = async () => {
  const url = "https://jsonplaceholder.typicode.com/users";

  // const response = await fetch(url);
  // const data = await response.json();

  // const data = await fetch(url).then(res => res.json());

  const data = await (await fetch(url)).json();

  console.log(data);
};

getUsers();




fetch("https://jsonplaceholder.typicode.com/users")
  .then(async (res) => {
    const data = await res.json();
    console.log("Users:", data);
  });

