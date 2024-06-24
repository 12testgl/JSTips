const descriptions = ["apples", "oranges", "bananas", "seven"];
const someTags = {
  apples: "::promotion::",
};
const noTags = {};

// Turn the products into a string, with their tags if applicable
function productsToString(description, tags) {
  let result = "";
  description.forEach((product) => {
    result += product;
    if (tags[product]) result += tags[product];
    result += ", ";
  });
  return result;
}

for (let i = 0; i < 100; i++) {
  productsToString(descriptions, someTags);
  productsToString(descriptions, noTags);
  productsToString(descriptions, noTags);
  productsToString(descriptions, noTags);
  productsToString(descriptions, noTags);
}
