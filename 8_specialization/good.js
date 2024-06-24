const descriptions = ["apples", "oranges", "bananas", "seven"];
const someTags = {
  apples: "::promotion::",
};
const noTags = {};

function productsToStringSpecialized(description, tags) {
  // We know that `tags` is likely to be empty, so we check
  // once ahead of time, and then we can remove the `if` check
  // from the inner loop
  if (isEmpty(tags)) {
    let result = "";
    description.forEach((product) => {
      result += product + ", ";
    });
    return result;
  } else {
    let result = "";
    description.forEach((product) => {
      result += product;
      if (tags[product]) result += tags[product];
      result += ", ";
    });
    return result;
  }
}
function isEmpty(o) {
  for (let _ in o) {
    return false;
  }
  return true;
}

for (let i = 0; i < 100000; i++) {
  productsToStringSpecialized(descriptions, someTags);
  productsToStringSpecialized(descriptions, noTags);
  productsToStringSpecialized(descriptions, noTags);
  productsToStringSpecialized(descriptions, noTags);
  productsToStringSpecialized(descriptions, noTags);
}
