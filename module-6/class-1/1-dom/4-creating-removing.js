const createCatImage = () => {
  const img = document.createElement("img");
  // console.log(img);

  const catImgSrc = "https://i.ytimg.com/vi/SQJrYw1QvSQ/maxresdefault.jpg";

  img.setAttribute("src", catImgSrc);
  img.alt = "Cute cat with a spade";
  img.setAttribute("width", 300);

  img.addEventListener("click", (event) => {
    event.target.remove();
  });

  return img;
};



const img = createCatImage();

// document.body.after(img);
document.body.appendChild(img);



const fragment = new DocumentFragment();

const cats = Array.from({ length: 1000 }, () => createCatImage());
// cats.forEach(img => document.body.append(img));

fragment.append(...cats);
document.body.appendChild(fragment);
