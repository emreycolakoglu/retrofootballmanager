import db from "@rfm/feature-database";

export async function seedNames(): Promise<void> {
  const firstNames: any[] = await fetch(
    "https://raw.githubusercontent.com/emreycolakoglu/retrofootballmanager/main/libs/static/src/lib/firstnames/firstnames.json",
  ).then((response) => response.json());
  await db.firstNames.bulkPut(firstNames);

  const lastNames: any[] = await fetch(
    "https://raw.githubusercontent.com/emreycolakoglu/retrofootballmanager/main/libs/static/src/lib/lastnames/lastnames.json",
  ).then((response) => response.json());
  await db.lastNames.bulkPut(lastNames);
}
