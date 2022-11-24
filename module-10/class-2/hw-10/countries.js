const getUrl = (name) => `https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`;

const result = document.querySelector("#result");

const resetResult = () => {
  // yuck, don't do that xD
  result.innerHTML = "";
};

const displayAlert = (msg, mode = "info") => {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  if (["info", "error"].includes(mode)) toast.classList.add(mode);

  toast.textContent = msg;

  resetResult();
  result.append(toast);
};

const displayCountryCard = ({ flags, name, capital, population, languages }) => {
  const card = document.createElement("artcile");
  const parsedLangs = languages.map(lang => lang.name).join(", ");

  card.innerHTML = `
  <h3>
    <img src="${flags.svg}" alt="${name} flag" width="50px" />
    ${name}
  </h3>
  <div>Capital: ${capital}</div>
  <div>Population: ${population}</div>
  <div>Languages: ${parsedLangs}</div>
  `;

  resetResult();
  result.append(card);
};

const displayCountriesList = (countries) => {
  const countryItems = countries.map(({ flags, name }) => {
    const item = document.createElement("article");

    item.innerHTML = `
    <h3>
      <img src="${flags.svg}" alt="${name} flag" width="50px" />
      ${name}
    </h3>`;

    return item;
  });

  resetResult();
  result.append(...countryItems);
};

const fetchCountries = (name) => {
  const parsedName = name.trim();
  if (parsedName.length === 0) return;

  const url = getUrl(parsedName);
  return fetch(url)
    .then(res => {
      if (!res.ok) throw new Error("No countries for such query!");

      return res.json();
    })
    .then(countries => {
      console.log(countries);
      if (countries.length > 10) return displayAlert("Too many countries found. Be more specific!")
      if (countries.length === 1) return displayCountryCard(countries[0]);
      return displayCountriesList(countries);
    })
    .catch(error => {
      console.error(error);
      displayAlert(error.message, "error");
    });
};


// fetchCountries("Poland");

const input = document.querySelector("input#search");

input.addEventListener("input",
  _.debounce(
    (event) => fetchCountries(event.target.value),
    300
  )
);
