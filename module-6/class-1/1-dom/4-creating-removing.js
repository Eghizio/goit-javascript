const dogImgSrc = "./images/dog.webp";
const catImgSrc = "./images/cat.jpg";

const createImage = () => {
  const img = document.createElement("img");
  // console.log(img);

  // const src = Math.random() > 0.5 ? dogImgSrc : catImgSrc;

  const [src, alt] = Math.random() > 0.5 ? [dogImgSrc, "Cute dog in a costume"] : [catImgSrc, "Cute cat with a spade"];

  img.setAttribute("src", src);
  img.alt = alt;
  img.setAttribute("width", 300);

  img.addEventListener("click", (event) => {
    event.target.remove();
  });

  return img;
};



const img = createImage();

// document.body.after(img);
document.body.appendChild(img);



const fragment = new DocumentFragment();

const pets = Array.from({ length: 1000 }, createImage);
// pets.forEach(img => document.body.append(img));

fragment.append(...pets);
document.body.appendChild(fragment);
