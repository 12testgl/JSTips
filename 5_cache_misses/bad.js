// setup:
const K = 1024;
const length = 1 * K * K;

const points = new Array(length);
for (let i = 0; i < points.length; i++) {
  points[i] = { x: 42, y: 0 };
}

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

// This array contains the *same data* as before, but shuffled randomly.
const shuffledPoints = shuffle(points.slice());

console.log(shuffledPoints[0]);

let _ = 0;
for (let i = 0; i < shuffledPoints.length; i++) {
  _ += shuffledPoints[i].x;
}

// from this
const badPoints = [{ x: 0, y: 5 }, { x: 0, y: 10 }]
 
// to this
const intPoints = new Int64Array([0, 5, 0, 10])

// immutability
// spread ...