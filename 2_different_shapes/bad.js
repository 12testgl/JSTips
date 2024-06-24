let _ = 0

// 2. polymorphic
const o1 = { a: 1, b: _, c: _, d: _, e: _ }
const o2 = { a: 1, b: _, c: _, d: _, e: _ }
const o3 = { a: 1, b: _, c: _, d: _, e: _ }
const o4 = { a: 1, b: _, c: _, d: _, e: _ }
const o5 = { b: _, a: 1, c: _, d: _, e: _ }

function add(a1, b1) {
  return a1.a + a1.b + a1.c + a1.d + a1.e + b1.a + b1.b + b1.c + b1.d + b1.e;
}

let result = 0;
for (let i = 0; i < 1000000; i++) {
  result += add(o1, o2);
  result += add(o3, o4);
  result += add(o4, o5);
}

// 3. megamorphic
// const o1 = { a: 1, b: _, c: _, d: _, e: _ }
// const o2 = { b: _, a: 1, c: _, d: _, e: _ }
// const o3 = { b: _, c: _, a: 1, d: _, e: _ }
// const o4 = { b: _, c: _, d: _, a: 1, e: _ }
// const o5 = { b: _, c: _, d: _, e: _, a: 1 }