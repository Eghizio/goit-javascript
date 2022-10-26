const notes = document.querySelector("input");

document.addEventListener("keydown", ({ key }) => {
  switch (key) {
    case "a":
    case "A":
      return console.log("LEFT");
    case "d":
    case "D":
      return console.log("RIGHT");
    case "w":
    case "W":
      return console.log("UP");
    case "s":
    case "S":
      return console.log("DOWN");
    case " ":
      return console.log("FAJER IN DE HOOOL!");
    default: return console.log(`Unhandled key: ${key}`);
  }
});