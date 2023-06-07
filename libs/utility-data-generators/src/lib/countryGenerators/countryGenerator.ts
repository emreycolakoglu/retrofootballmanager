import { writeFileSync } from "node:fs";

/**
 * converts gini value to game prestige value
 * @param giniValue
 * @returns
 */
function convertGiniToPrestige(giniValue: number) {
  // Ensure giniValue is a number
  if (typeof giniValue !== "number") {
    throw new Error("Invalid input. GINI value must be a number.");
  }

  // Check if giniValue is within the valid range
  if (giniValue < 0 || giniValue > 1) {
    throw new Error("Invalid input. GINI value must be between 0 and 1.");
  }

  // Convert GINI value to the range of 0-20
  const convertedValue = 20 - giniValue * 20;

  // Return the converted value as a number
  return convertedValue.toFixed(2);
}

export async function generateCountryData() {
  const rawResponse = await fetch("https://restcountries.com/v3.1/all", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const countries: any[] = await rawResponse.json();

  const dbCounries: any[] = countries.map((c) => {
    const currencies = c.currencies
      ? Object.keys(c.currencies).map((t) => t)
      : [];
    const languages = c.languages
      ? Object.keys(c.languages).map((x) => x.toUpperCase())
      : [];

    let prestige;
    if (c.gini) {
      const giniYears = Object.keys(c.gini);
      const gini = c.gini[giniYears.at(-1)];
      prestige = convertGiniToPrestige(gini / 100);
      prestige = Math.floor(prestige);
    }

    return {
      name: c.name.common,
      alpha2Code: c.cca2,
      alpha3Code: c.cca3,
      availableToPlay: c.continents.indexOf("Europe") > -1,
      continent: c.continents.at(0) as string,
      flag: c.flags.svg,
      prestige: prestige || 0,
      currencies,
      languages,
    };
  });

  writeFileSync(
    "../../../static/src/lib/countries/countries.json",
    JSON.stringify(dbCounries),
    {
      encoding: "utf-8",
    }
  );

  return true;
}

generateCountryData();
