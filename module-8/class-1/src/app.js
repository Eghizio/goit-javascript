import dupa, { validateEmail } from "./our-module.js";

dupa("john@mail.com");
dupa("abc");

console.log("\n");

validateEmail("john@mail.com");
validateEmail("abc");
