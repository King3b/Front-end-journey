const crew = [
  { name: "Luffy", role: "Captain", bounty: 300, active: true },
  { name: "Zoro", role: "Swordsman", bounty: 200, active: true },
  { name: "Nami", role: "Navigator", bounty: 100, active: true },
  { name: "Usopp", role: "Sniper", bounty: 80, active: false },
  { name: "Sanji", role: "Cook", bounty: 150, active: true },
];

function processCrew(crew) {
  let activeCount = 0;
  let totalBounty = 0;
  for (const member of crew) {
    if (!member.active) continue;
    if (member.bounty < 100) break;
    activeCount++;
    totalBounty += member.bounty;
  }
  return { activeCount, totalBounty };
}
