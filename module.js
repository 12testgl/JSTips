const myModule = (function () {
  // Private variables and functions
  let privateVar = "I am private!";

  function privateFunction() {
    console.log("This is a private function.");
  }

  // Public API (exported)
  return {
    publicVar: "I am public!",
    publicFunction() {
      console.log("This is a public function.");
    },
  };
})();


// Usage
console.log(myModule.publicVar); // Access public variable
myModule.publicFunction(); // Call public function
