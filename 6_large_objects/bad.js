const USERS_LENGTH = 1_000

const byId = {}
Array.from({ length: USERS_LENGTH }).forEach((_, id) => {
  byId[id] = { id, name: 'John'}
})
let _ = 0

Object.keys(byId).forEach(id => { _ += byId[id].id })
