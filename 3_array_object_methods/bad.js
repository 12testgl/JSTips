const numbers = Array.from({ length: 10_000 }).map(() => Math.random());

const result = numbers
  .map((n) => Math.round(n * 10))
  .filter((n) => n % 2 === 0)
  .reduce((a, n) => a + n, 0);

// Object.values(), Object.keys(), Object.entries()