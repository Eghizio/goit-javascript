const date = new Date();

console.log(date);

console.log(date.toString());

const standardizedDateString = date.toISOString();
console.log(standardizedDateString);

const deserializedDate = new Date(standardizedDateString);
console.log(deserializedDate);

console.clear();

const bday = new Date(0);
console.log(bday);

bday.setFullYear(2022);
bday.setMonth(9);
bday.setDate(2);

console.log(bday);

const d1 = new Date();
const d2 = new Date(2000, 0);

console.log(d1.getTime() - d2.getTime());


console.log(new Date().getTime());
console.log(Date.now());


console.clear();



let lastDate = Date.now();

const clock = setInterval(() => {
  const now = Date.now();
  const secondsPassed = Math.round((now - lastDate) / 1000);
  console.log(secondsPassed);
  // lastDate = now;
}, 1000);

clearInterval(clock);


// Self managed interval
console.clear();

const interval = setInterval(() => {
  const now = Date.now();
  const secondsPassed = Math.round((now - lastDate) / 1000);
  console.log(secondsPassed);

  if (secondsPassed >= 60) clearInterval(interval);
}, 1000);


// clearInterval(inflacja); niech to ktoś zatrzyma bo tak zapierdala xd

