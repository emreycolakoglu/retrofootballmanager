import db from "@rfm/dexie-database";

export async function seedNames(): Promise<void> {
  const firstNames: any[] = await fetch("").then((response) => response.json());
  const lastNames: any[] = await fetch("").then((response) => response.json());

  await db.firstNames.bulkPut(firstNames);
  await db.lastNames.bulkPut(lastNames);
}
