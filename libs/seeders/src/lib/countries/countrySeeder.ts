import { CountryModel } from "@rfm/interfaces";
import { fetchRestCountries, RestCountries } from "../restCountries";
import db from "@rfm/dexie-database";

export async function seedCountries(): Promise<void> {
  const countries = await fetchRestCountries();

  // TODO fix when going live
  const dbCounries: CountryModel.Base[] = countries
    .filter((c) => c.continents.indexOf(RestCountries.Continent.Europe) > -1)
    .map((c) => {
      return {
        name: c.name.common,
        alpha2Code: c.cca2,
        alpha3Code: c.cca3,
        availableToPlay: true,
        // TODO fix properly
        continentId: 0,
        flag: c.flags.svg,
        // TODO fix properly
        prestige: 0,
      };
    });

  await db.countries.bulkPut(dbCounries);
}
