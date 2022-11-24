const createImage = ({ download_url }) => {
  const img = document.createElement("img");
  img.src = download_url;
  img.classList.add("photo");

  return img;
};

const renderImages = (imagesData = []) => {
  const imgs = imagesData.map(createImage);

  const fragment = document.createDocumentFragment();
  fragment.append(...imgs);

  const photosGrid = document.querySelector("#photos");
  photosGrid.append(fragment);
};

const getJSON = (url) => fetch(url).then(res => res.json()).catch(console.error);

// getJSON("https://picsum.photos/v2/list?page=2&limit=21").then(renderImages);

const createImageLoader = () => {
  let page = 1;
  return () => getJSON(`https://picsum.photos/v2/list?page=${page++}&limit=21`)
    .then(renderImages)
    .then(() => console.log(`Loaded images from page ${page - 1}`));
};


const loadImages = createImageLoader();

// loadImages().then(loadImages);

let debounce = 0;
const observer = new IntersectionObserver(([entry]) => {
  if (!entry.isIntersecting) return;

  if ((debounce + 3000) < Date.now()) {
    loadImages();
    debounce = Date.now();
  }
});

observer.observe(document.querySelector("#load-more"));

