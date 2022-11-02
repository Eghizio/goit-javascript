// Scroll events firing rate
const createScrollEventsCounter = (element) => {
  let numberOfScrolls = 0;

  return () => {
    element.textContent = ++numberOfScrolls;
  };
};

const scrolls = document.querySelector("span#scrolls");
const scrollEventsCounter = createScrollEventsCounter(scrolls);

document.addEventListener("scroll", scrollEventsCounter);



// // Lodash aka "_"

// console.log(_);
// console.log(_.add(2, 3));

// Throttling
const throttledScrolls = document.querySelector("span#throttled-scrolls");
const throttledScrollEventsCounter = _.throttle(
  createScrollEventsCounter(throttledScrolls),
  200
);

document.addEventListener("scroll", throttledScrollEventsCounter);



// Debouncing
const debouncedScrolls = document.querySelector("span#debounced-scrolls");
const debouncedScrollEventsCounter = _.debounce(
  createScrollEventsCounter(debouncedScrolls),
  200
);

document.addEventListener("scroll", debouncedScrollEventsCounter);



// Trailing Edge Debouncing
const trailingDebouncedScrolls = document.querySelector("span#trailing-debounced-scrolls");
const trailingDebouncedScrollEventsCounter = _.debounce(
  createScrollEventsCounter(trailingDebouncedScrolls),
  200,
  { trailing: true }
);

document.addEventListener("scroll", trailingDebouncedScrollEventsCounter);



// Leading Edge Debouncing
const leadingDebouncedScrolls = document.querySelector("span#leading-debounced-scrolls");
const leadingDebouncedScrollEventsCounter = _.debounce(
  createScrollEventsCounter(leadingDebouncedScrolls),
  200,
  { leading: true }
);

document.addEventListener("scroll", leadingDebouncedScrollEventsCounter);



// Custom Throttle
const customCounter = document.querySelector("span#custom-throttled-scrolls")
let counter = 0;

const count = () => {
  customCounter.textContent = ++counter;
}

const customThrottling = (callback, delay) => {
  let lastCall = Date.now();

  return () => {
    const now = Date.now();
    const diff = now - lastCall;

    if (diff >= delay) {
      // console.log({ now, lastCall, diff });
      lastCall = now;
      callback();
    }
  };
};

document.addEventListener("scroll", customThrottling(count, 200));


// Pinwheel spinning :D
const [pinwheelFirst, pinwheelSecond] = document.querySelectorAll("div.pinwheel");

const spinPinwheel = (pinwheel, incrementDegree = 1) => () => {
  const prevRotation = parseInt(pinwheel.style.rotate.replace("deg", ""), 10) || 0;
  // console.log(prevRotation);
  const currentRotation = prevRotation % 360 + incrementDegree;
  pinwheel.style.rotate = `${currentRotation}deg`;
};

// document.addEventListener("scroll", spinPinwheel(pinwheelFirst));
// document.addEventListener("scroll", customThrottling(spinPinwheel(pinwheelSecond), 42));

document.addEventListener("mousemove", spinPinwheel(pinwheelFirst, 10));
document.addEventListener("mousemove", customThrottling(spinPinwheel(pinwheelSecond, -10), 42));
