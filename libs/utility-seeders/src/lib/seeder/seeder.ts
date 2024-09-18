import db from "@rfm/feature-database";
import { seedColors } from "../colors";
import { seedContinents } from "../continent";
import { seedCountries } from "../countries";
import { seedNews } from "../news";
import { seedLanguages } from "../languages";
import { seedNames } from "../names";

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

  const existingLanguageCount = await db.languages.count();
  if (!existingLanguageCount) {
    await seedLanguages();
  }

  const existingFirstNameCount = await db.firstNames.count();
  if (!existingFirstNameCount) {
    await seedNames();
  }
}
