import { CountryModel } from "@rfm/utility-interfaces";
import db from "@rfm/dexie-database";

export async function seedCountries(): Promise<void> {
  const countries: any[] = await fetch(
    "https://raw.githubusercontent.com/emreycolakoglu/retrofootballmanager/main/libs/static/src/lib/countries/countries.json"
  ).then((response) => response.json());

  const continents = await db.continents.toArray();

  // TODO fix when going live
  const dbCounries: CountryModel.Base[] = countries.map((c) => {
    const continent = continents.find((x) => x.name == c.continent);

    return {
      name: c.name,
      alpha2Code: c.alpha2Code,
      alpha3Code: c.alpha3Code,
      availableToPlay: c.availableToPlay,
      continent: continent.key,
      flag: c.flag,
      prestige: c.prestige,
      currencies: c.currencies,
      languages: c.languages,
    };
  });

  await db.countries.bulkPut(dbCounries);
}
