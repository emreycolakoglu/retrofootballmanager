import { CountryModel } from "@rfm/interfaces";
import { fetchRestCountries, RestCountries } from "../restCountries";
import db from "@rfm/dexie-database";

export async function seedCountries(): Promise<void> {
  const countries = await fetchRestCountries();

  const continents = await db.continents.toArray();

  // TODO fix when going live
  const dbCounries: CountryModel.Base[] = countries
    .filter((c) => c.continents.indexOf(RestCountries.Continent.Europe) > -1)
    .map((c) => {
      const continent = continents.find((x) => x.name == c.continents.at(0));

      return {
        name: c.name.common,
        alpha2Code: c.cca2,
        alpha3Code: c.cca3,
        availableToPlay: true,
        continentId: continent.id,
        flag: c.flags.svg,
        // TODO fix properly
        prestige: 0,
      };
    });

  await db.countries.bulkPut(dbCounries);
}
