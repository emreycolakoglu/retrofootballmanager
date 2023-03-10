import db from "@rfm/dexie-database";
import { seedColors } from "../colors";
import { seedContinents } from "../continent";
import { seedCountries } from "../countries";
import { seedNews } from "../news";

export async function seedData() {
  const existingContinentCount = await db.continents.count();
  if (!existingContinentCount) {
    await seedContinents();
  }

  const existingColorCount = await db.colors.count();
  if (!existingColorCount) {
    await seedColors();
  }

  const existingCountryCount = await db.countries.count();
  if (!existingCountryCount) {
    await seedCountries();
  }

  const existingNewsCount = await db.news.count();
  if (!existingNewsCount) {
    await seedNews();
  }
}
