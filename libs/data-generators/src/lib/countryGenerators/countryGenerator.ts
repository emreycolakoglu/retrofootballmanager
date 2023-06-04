import { writeFile, writeFileSync } from "node:fs";

export async function generateCountryData() {
  const rawResponse = await fetch("https://restcountries.com/v3.1/all", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const countries: any[] = await rawResponse.json();

  console.log("zaasadas");

  const dbCounries: any[] = countries.map((c) => {
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
      availableToPlay: c.continents.indexOf("Europe") > -1,
      continent: c.continents.at(0) as string,
      flag: c.flags.svg,
      // TODO fix properly
      prestige: 0,
      currencies,
      languages,
    };
  });

  console.log(JSON.stringify(dbCounries));

  writeFileSync(
    // path.resolve(
    //   __dirname,
    //   "../../../../static/src/lib/countries/countries.json"
    // ),
    "countries.json",
    // JSON.stringify(dbCounries),
    "asdasdasda",
    {
      encoding: "utf-8",
    }
  );

  return true;
}

generateCountryData();
