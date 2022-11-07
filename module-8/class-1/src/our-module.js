// const validator = require("validator");
import validator from "validator";
// import { isEmail } from "validator";

export const validateEmail = (email) => {
  const isValid = validator.isEmail(email);

  console.log(`Is ${email} a valid email?:`, isValid);

  return isValid;
};

// validateEmail("mango@mail.com");
// validateEmail("Mangozedog.com");

const fakeFunction = (email) => {
  console.log(`Is ${email} a valid email?:`, true);

  return true;
};

// export default validateEmail;
export default fakeFunction;

// export { a, b, c };

// module.exports = validateEmail;
// module.exports = { validateEmail };
