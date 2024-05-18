function processRequest(r, chain) {
  let lastResult = null;
  let i = 0;
  do {
    lastResult = chain[i](r);
    i++;
  } while (lastResult != null && i < chain.length);
  if (lastResult != null) {
    console.log("Error: request could not be fulfilled");
  }
}

let chain = [
  function (r) {
    if (typeof r == "number") {
      console.log("It's a number: ", r);
      return null;
    }
    return r;
  },
  function (r) {
    if (typeof r == "string") {
      console.log("It's a string: ", r);
      return null;
    }
    return r;
  },
  function (r) {
    if (Array.isArray(r)) {
      console.log("It's an array of length: ", r.length);
      return null;
    }
    return r;
  },
];

processRequest(1, chain);
processRequest([1, 2, 3], chain);
processRequest("[1,2,3]", chain);
processRequest({}, chain);

// Middleware function to log incoming requests
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});
// Route handler for the home page
app.get("/", (req, res) => {
  res.send("Hello World!");
});
// Start the server
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
