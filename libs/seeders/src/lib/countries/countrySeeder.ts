import { CountryModel } from "@rfm/interfaces";
import { fetchRestCountries, RestCountries } from "../restCountries";
import db from "@rfm/dexie-database";

export async function seedCountries(): Promise<void> {
  const countries = await fetchRestCountries();

  const continents = await db.continents.toArray();

  // TODO fix when going live
  const dbCounries: CountryModel.Base[] = countries.map((c) => {
    const continent = continents.find((x) => x.name == c.continents.at(0));
    const currencies = c.currencies
      ? Object.keys(c.currencies).map((t) => t)
      : [];
    const languages = c.languages
      ? Object.keys(c.languages).map((x) => x.toUpperCase())
      : [];

    return {
      name: c.name.common,
      alpha2Code: c.cca2,
      alpha3Code: c.cca3,
      availableToPlay:
        c.continents.indexOf(RestCountries.Continent.Europe) > -1,
      continent: continent.key,
      flag: c.flags.svg,
      // TODO fix properly
      prestige: 0,
      currencies,
      languages,
    };
  });

  await db.countries.bulkPut(dbCounries);
}
