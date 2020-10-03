const { add } = require("../utils/index");

module.exports = (firstName, lastName) => {
  const concat = add;
  const fullName = concat(firstName, lastName);
  return `hello ${fullName}, i'm @flames/presentational package`;
};
