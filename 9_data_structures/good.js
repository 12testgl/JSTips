const userIds = Array.from({ length: 1_000 }).map((_, i) => i);
const adminIdsArray = userIds.slice(0, 10);
const adminIdsSet = new Set(adminIdsArray);

let _ = 0
for (let i = 0; i < userIds.length; i++) {
  if (adminIdsSet.has(userIds[i])) { _ += 1 }
}

