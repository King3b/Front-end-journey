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

function rankedCrew(crew) {
  return (
    crew
      .filter((member) => member.active)
      //.map(({ name, stats, bonusStats }) => {
      // const totalPower = stats.bounty + stats.strength + bonusStats.bonus;
      // return { name, totalPower };
      //})
      .map(({ name, stats, bonusStats }) => {
        const totalPower = stats.bounty + stats.strength + bonusStats.bonus;
        return { name, totalPower };
      })
      .sort((a, b) => b.totalPower - a.totalPower)
  );
}

async function loadCrew() {
  try {
    const crew = await fetchCrew();
    const results = rankedCrew(crew);
    //const strongest = results.length ? results[0] : null;
    const strongest = results[0];
    console.log("Strongest Crew Member:", strongest);
    console.log("Crew Analysis Results:", results);
  } catch (error) {
    console.error("Failed to analyze crew:", error);
  }
}
loadCrew();
