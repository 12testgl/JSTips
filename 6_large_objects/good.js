const USERS_LENGTH = 1_000

const byId = {}
Array.from({ length: USERS_LENGTH }).forEach((_, id) => {
  byId[id] = { id, name: 'John'}
})
let _ = 0

Object.values(byId).forEach(user => { _ += user.id })
