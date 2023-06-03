import { fetchRestCountries } from "../restCountries";
import db from "@rfm/dexie-database";
import { uniqBy } from "lodash-es";

export async function seedLanguages(): Promise<void> {
  const countries = await fetchRestCountries();

  const languageList = countries.map((c) => c.languages);
  const languagesIterated: { key: string; value: string }[] = [];
  languageList.map((l) => {
    if (l) {
      for (const key in l) {
        languagesIterated.push({
          key,
          value: l[key],
        });
      }
    }
  });

  const uniqueLanguages = uniqBy(languagesIterated, "key");

  await db.languages.bulkPut(
    uniqueLanguages.map((x) => ({
      key: x.key,
      name: x.value,
    }))
  );
}
