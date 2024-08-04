const { Worker } = require("worker_threads");

const syncInterval = setInterval(() => {
  console.log("Event loop executed");
}, 1);

const findPrime = (num) =>
  new Promise((resolve) => {
    const worker = new Worker(require.resolve("./worker.js"), {
      workerData: num,
    });

    worker.on("message", (d) => resolve(d));
  });

const nth = 10000; // play with this value

console.log("Calculating Sync Prime...");
const startTime = performance.now();

findPrime(nth).then((n) => {
  const endTime = performance.now();
  console.log("Sync Prime is", n);
  console.log(`Computation took ${endTime - startTime} milliseconds`);
  console.log("------");

  clearInterval(syncInterval);
});
