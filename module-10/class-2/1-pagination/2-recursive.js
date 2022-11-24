const createPersonCard = ({ name, birth_year }) => {
  const container = document.createElement("article");
  const h3 = document.createElement("h3");
  h3.textContent = name;

  const p = document.createElement("p");
  p.textContent = birth_year;

  container.append(h3);
  container.append(p);
  return container;
};

const renderPeople = (postsData = []) => {
  const postsList = document.querySelector("#posts");
  const fragment = document.createDocumentFragment();

  const posts = postsData.map(createPersonCard);
  fragment.append(...posts);

  postsList.append(fragment);
};



const getJSON = (url) => fetch(url).then(res => res.json()).catch(console.error);


const getAllStarWarsPeople = () => {
  const people = [];

  const fetchPeoplePage = (url) => {
    return getJSON(url)
      .then(data => {
        people.push(...data.results);

        // if (people.length > 42) throw new Error("dupa");

        return data.next ? fetchPeoplePage(data.next) : people;
      });
  };

  return fetchPeoplePage("https://swapi.dev/api/people");
};


getAllStarWarsPeople()
  .then(renderPeople)
  .catch(() => console.log("hehe"));


