import { readFile, writeFile } from "node:fs/promises";

export async function generateFirstNames() {
  const readPromises = await Promise.all([
    readFile("../../../static/src/raw/firstnames/en_UK.json", {
      encoding: "utf-8",
    }),
    readFile("../../../static/src/raw/firstnames/de.json", {
      encoding: "utf-8",
    }),
    readFile("../../../static/src/raw/firstnames/es.json", {
      encoding: "utf-8",
    }),
    readFile("../../../static/src/raw/firstnames/fr.json", {
      encoding: "utf-8",
    }),
    readFile("../../../static/src/raw/firstnames/it.json", {
      encoding: "utf-8",
    }),
    readFile("../../../static/src/raw/firstnames/tr.json", {
      encoding: "utf-8",
    }),
  ]);

  const firstNames = [
    ...JSON.parse(readPromises[0]).map((k) => ({
      language: "ENG",
      value: k,
    })),
    ...JSON.parse(readPromises[1]).map((k) => ({
      language: "DEU",
      value: k,
    })),
    ...JSON.parse(readPromises[2]).map((k) => ({
      language: "SPA",
      value: k,
    })),
    ...JSON.parse(readPromises[3]).map((k) => ({
      language: "FRA",
      value: k,
    })),
    ...JSON.parse(readPromises[4]).map((k) => ({
      language: "ITA",
      value: k,
    })),
    ...JSON.parse(readPromises[5]).map((k) => ({
      language: "TUR",
      value: k,
    })),
  ];

  await writeFile(
    "../../../static/src/lib/firstnames/firstnames.json",
    JSON.stringify(firstNames),
    {
      encoding: "utf-8",
    }
  );
}

export async function generateLastNames() {
  const readPromises = await Promise.all([
    readFile("../../../static/src/raw/lastnames/en_UK.json", {
      encoding: "utf-8",
    }),
    readFile("../../../static/src/raw/lastnames/de.json", {
      encoding: "utf-8",
    }),
    readFile("../../../static/src/raw/lastnames/es.json", {
      encoding: "utf-8",
    }),
    readFile("../../../static/src/raw/lastnames/fr.json", {
      encoding: "utf-8",
    }),
    readFile("../../../static/src/raw/lastnames/it.json", {
      encoding: "utf-8",
    }),
    readFile("../../../static/src/raw/lastnames/tr.json", {
      encoding: "utf-8",
    }),
  ]);

  const lastNames = [
    ...JSON.parse(readPromises[0]).map((k) => ({
      language: "ENG",
      value: k,
    })),
    ...JSON.parse(readPromises[1]).map((k) => ({
      language: "DEU",
      value: k,
    })),
    ...JSON.parse(readPromises[2]).map((k) => ({
      language: "SPA",
      value: k,
    })),
    ...JSON.parse(readPromises[3]).map((k) => ({
      language: "FRA",
      value: k,
    })),
    ...JSON.parse(readPromises[4]).map((k) => ({
      language: "ITA",
      value: k,
    })),
    ...JSON.parse(readPromises[5]).map((k) => ({
      language: "TUR",
      value: k,
    })),
  ];

  await writeFile(
    "../../../static/src/lib/lastnames/lastnames.json",
    JSON.stringify(lastNames),
    {
      encoding: "utf-8",
    }
  );
}

generateFirstNames();
generateLastNames();
