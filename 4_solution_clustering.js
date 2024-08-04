const cluster = require("node:cluster");
const { cpus } = require("node:os");
const process = require("node:process");

const numCPUs = cpus().length;

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);
 
  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
    const findPrime = (num) => {
    let i;
    let primes = [2, 3];
    let n = 5;

    const isPrime = (n) => {
      let i = 1;
      let p = primes[i];
      let limit = Math.ceil(Math.sqrt(n));

      while (p <= limit) {
        if (n % p === 0) {
          return false;
        }
        i += 1;
        p = primes[i];
      }
      return true;
    };

    for (i = 2; i <= num; i += 1) {
      while (!isPrime(n)) {
        n += 2;
      }
      primes.push(n);
      n += 2;
    }

    return primes[num - 1];
  };

  console.log("Calculating Clustered Prime...");
  const startTime = performance.now();

  const nth = 1000000; // play with this value

  const endTime = performance.now();
  console.log("Clustered Prime is", findPrime(nth));
  console.log(`Computation took ${endTime - startTime} milliseconds`);
  console.log("------");

  console.log(`Worker ${process.pid} started`);
}

// if (cluster.isPrimary) {
//   // Fork workers for each CPU core
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }

//   cluster.on("exit", (worker, code, signal) => {
//     console.log(`Worker ${worker.process.pid} died`);
//   });
// } else {
//   // Worker process handles incoming requests
//   http
//     .createServer((req, res) => {
//       res.writeHead(200, { "Content-Type": "text/plain" });
//       res.end("Hello from worker " + cluster.worker.id);
//     })
//     .listen(8000);

//   console.log(`Worker ${cluster.worker.id} started`);
// }
