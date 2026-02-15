const crew = [
  {
    name: "Luffy",
    active: true,
    stats: { bounty: 3000, strength: 95 },
    bonusStats: { bonus: 500 },
  },
  {
    name: "Zoro",
    active: true,
    stats: { bounty: 2500, strength: 90 },
    bonusStats: { bonus: 400 },
  },
  {
    name: "Sanji",
    active: true,
    stats: { bounty: 2000, strength: 88 },
    bonusStats: { bonus: 350 },
  },
  {
    name: "Usopp",
    active: false,
    stats: { bounty: 800, strength: 60 },
    bonusStats: { bonus: 100 },
  },
  {
    name: "Law",
    active: true,
    stats: { bounty: 2800, strength: 92 },
    bonusStats: { bonus: 450 },
  },
];

function analyzeCrew(crew) {
  const fullStats = (member) => {
    const stats = { ...member.stats };
    for (const key in member.bonusStats) {
      stats[key] = (stats[key] || 0) + member.bonusStats[key];
    }
    return stats;
  };
  const rankedCrew = crew
    .filter((member) => member.active)
    .map((member) => {
      const totalPower =
        member.stats.bounty + member.stats.strength + member.bonusStats.bonus;
      return { name: member.name, totalPower, fullStats: fullStats(member) };
    })
    .sort((a, b) => b.totalPower - a.totalPower);
  return rankedCrew;
}
const rankedCrew = analyzeCrew(crew);
console.log(rankedCrew);

// Phase 2
function fetchCrew() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.2
        ? resolve([
            {
              name: "Luffy",
              active: true,
              stats: { bounty: 3000, strength: 95 },
              bonusStats: { bonus: 200 },
            },
            {
              name: "Zoro",
              active: true,
              stats: { bounty: 2500, strength: 90 },
              bonusStats: { bonus: 150 },
            },
            {
              name: "Usopp",
              active: false,
              stats: { bounty: 500, strength: 60 },
              bonusStats: { bonus: 50 },
            },
            {
              name: "Sanji",
              active: true,
              stats: { bounty: 2200, strength: 85 },
              bonusStats: { bonus: 120 },
            },
          ])
        : reject("Crew server destroyed 💥❌");
    }, 800);
  });
}
//Filter inactive

//lculate totalPower

//Sort descending

async function loadCrew() {
  try {
    const crew = await fetchCrew();
    const results = analyzeCrew(crew);

    console.log("Crew Analysis Results:", results);
  } catch (error) {
    console.error("Failed to load crew:", error);
  }
}
loadCrew();
