const scores = [45, 67, 89, 34, 90, 100, 23];

function countPasses(scores) {
  let passCount = 0;
  for (const score of scores) {
    if (score >= 50) passCount++;
    if (score === 100) break;
  }
  return passCount;
}

const registrations = [
  { name: "Alice", age: 20, paid: true },
  { name: "", age: 25, paid: true },
  { name: "Bob", age: 16, paid: true },
  { name: "Charlie", age: 30, paid: false },
  { name: "Diana", age: 22, paid: true },
];

function validateRegistrations(registrations) {
  let validCount = 0;
  for (const reg of registrations) {
    if (reg.name === "" || reg.age < 18) continue;
    if (!reg.paid) break;
    if (reg.paid) validCount++;
  }
  return validCount;
}

const orders = [
  { id: 1, user: "Alice", total: 120, paid: true },
  { id: 2, user: "Bob", total: 60, paid: true },
  { id: 3, user: "Charlie", total: 200, paid: false },
  { id: 4, user: "Diana", total: 30, paid: true },
  { id: 5, user: "Eve", total: 150, paid: true },
];

function processOrders(orders) {
  let count = 0;
  let TotalRevenue = 0;
  for (const order of orders) {
    if (!order.paid) break;
    if (order.total < 50) continue;
    count++;
    TotalRevenue += order.total;
  }
  return { count, TotalRevenue };
}
