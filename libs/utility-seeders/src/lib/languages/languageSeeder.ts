import db from "@rfm/feature-database";

export async function seedLanguages(): Promise<void> {
  const uniqueLanguages = await fetch(
    "https://raw.githubusercontent.com/emreycolakoglu/retrofootballmanager/main/libs/static/src/lib/languages/languages.json",
  ).then((response) => response.json());

  await db.languages.bulkPut(
    uniqueLanguages.map((x) => ({
      key: x.key,
      name: x.value,
    })),
  );
}
