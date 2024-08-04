const syncInterval = setInterval(() => {
  console.log("Event loop executed");
}, 1);

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

console.log("Calculating Sync Prime...");
const startTime = performance.now();

const nth = 2_000_000; // play with this value
console.log("Sync Prime is", findPrime(nth));

const endTime = performance.now();
console.log(`Computation took ${endTime - startTime} milliseconds`);
console.log("------");

clearInterval(syncInterval);
