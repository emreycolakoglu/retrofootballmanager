import db from "@rfm/dexie-database";

export async function seedContinents(): Promise<void> {
  const continents = [
    {
      name: "Africa",
      slug: "africa",
      prestige: 10,
    },
    {
      name: "Antarctica",
      slug: "antarctica",
      prestige: 1,
    },
    {
      name: "Asia",
      slug: "asia",
      prestige: 15,
    },
    {
      name: "Australia",
      slug: "australia",
      prestige: 8,
    },
    {
      name: "Europe",
      slug: "europe",
      prestige: 18,
    },
    {
      name: "North America",
      slug: "north-america",
      prestige: 12,
    },
    {
      name: "South America",
      slug: "south-america",
      prestige: 9,
    },
  ];

  await db.continents.bulkAdd(continents);
}
