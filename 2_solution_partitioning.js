const asyncInterval = setInterval(() => {
  console.log("Event loop executed");
}, 1);

const findPrimeAsync = async (num) => {
  let i;
  let primes = [2, 3];
  let n = 5;

  const isPrime = (n) =>
    /*
      The Promise lets other tasks proceed concurrently, while waiting for the setImmediate() callback to execute. This prevents the main thread from being blocked.
    */
    new Promise((res) =>

      /*
        The setImmediate() callback inside the Promise ensures that the logic runs asynchronously. It defers execution to the next iteration of the event loop. It falls into the “pending callbacks” phase first, then into "check".
      */
      setImmediate(() => {
        let i = 1;
        let p = primes[i];
        let limit = Math.ceil(Math.sqrt(n));

        while (p <= limit) {
          if (n % p === 0) {
            return res(false);
          }
          i += 1;
          p = primes[i];
        }
        return res(true);
      })
    );

  for (i = 2; i <= num; i += 1) {

    // When await isPrime(n) is encountered, it schedules the setImmediate() callback
    while (!(await isPrime(n))) {
      n += 2;
    }
    primes.push(n);
    n += 2;
  }

  return primes[num - 1];
};

console.log("Calculating Async Prime...");

const nth = 100; // play with this value

const startTime = performance.now();
findPrimeAsync(nth)
  .then((n) => {
    const endTime = performance.now();
    console.log("Async Prime is", n);
    console.log(`Computation took ${endTime - startTime} milliseconds`);
    console.log("------");
  })
  .then(() => clearInterval(asyncInterval));


