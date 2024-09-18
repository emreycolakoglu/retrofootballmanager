import db from "@rfm/feature-database";

export async function seedColors(): Promise<void> {
  const colors: { name: string; value: string }[] = await fetch(
    "https://raw.githubusercontent.com/emreycolakoglu/retrofootballmanager/main/libs/static/src/lib/colors/colors.json",
  ).then((response) => response.json());

  await db.colors.bulkPut(colors);
}
