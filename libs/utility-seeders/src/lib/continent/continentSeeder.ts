import db from "@rfm/feature-database";

export async function seedContinents(): Promise<void> {
  const continents = await fetch(
    "https://raw.githubusercontent.com/emreycolakoglu/retrofootballmanager/main/libs/static/src/lib/continents/continents.json",
  ).then((response) => response.json());

  await db.continents.bulkAdd(continents);
}
