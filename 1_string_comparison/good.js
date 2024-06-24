const Position = {
  TOP: 0,
  BOTTOM: 1,
}
 
let _ = 0
for (let i = 0; i < 1000000; i++) {
  let current = i % 2 === 0 ?
    Position.TOP : Position.BOTTOM
  if (current === Position.TOP)
    _ += 1
}