import db from "@rfm/dexie-database";

export async function seedContinents(): Promise<void> {
  const continents = [
    {
      name: "Africa",
      slug: "africa",
      key: "AF",
      prestige: 10,
    },
    {
      name: "Antarctica",
      slug: "antarctica",
      key: "AN",
      prestige: 1,
    },
    {
      name: "Asia",
      slug: "asia",
      key: "AS",
      prestige: 15,
    },
    {
      name: "Oceania",
      slug: "oceania",
      key: "OC",
      prestige: 8,
    },
    {
      name: "Europe",
      slug: "europe",
      key: "EU",
      prestige: 18,
    },
    {
      name: "North America",
      slug: "north-america",
      key: "NA",
      prestige: 12,
    },
    {
      name: "South America",
      slug: "south-america",
      key: "SA",
      prestige: 9,
    },
  ];

  await db.continents.bulkAdd(continents);
}
