import { writeFileSync } from "node:fs";
import { uniqBy } from "lodash";

export async function generateLanguageData() {
  const rawResponse = await fetch("https://restcountries.com/v3.1/all", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const countries: any[] = await rawResponse.json();

  const languageList = countries.map((c) => c.languages);
  const languagesIterated: { key: string; value: string }[] = [];
  languageList.map((l) => {
    if (l) {
      for (const key in l) {
        languagesIterated.push({
          key: key.toUpperCase(),
          value: l[key],
        });
      }
    }
  });

  const uniqueLanguages = uniqBy(languagesIterated, "key");

  writeFileSync(
    "../../../static/src/lib/languages/languages.json",
    JSON.stringify(uniqueLanguages),
    {
      encoding: "utf-8",
    }
  );

  return true;
}

generateLanguageData();
