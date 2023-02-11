import db from "@rfm/dexie-database";

export async function seedContinents(): Promise<void> {
  const continents = [
    {
      name: "Africa",
      prestige: 10,
    },
    {
      name: "Antarctica",
      prestige: 1,
    },
    {
      name: "Asia",
      prestige: 15,
    },
    {
      name: "Australia",
      prestige: 8,
    },
    {
      name: "Europe",
      prestige: 18,
    },
    {
      name: "North America",
      prestige: 12,
    },
    {
      name: "South America",
      prestige: 9,
    },
  ];

  await db.continents.bulkAdd(continents);
}
