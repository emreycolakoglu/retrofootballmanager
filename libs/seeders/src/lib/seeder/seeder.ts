import db from "@rfm/dexie-database";
import { seedColors } from "../colors";
import { seedContinents } from "../continent";

export async function seedData() {
  const existingContinentCount = await db.continents.count();
  if (!existingContinentCount) {
    await seedContinents();
  }

  const existingColorCount = await db.colors.count();
  if (!existingColorCount) {
    await seedColors();
  }
}
