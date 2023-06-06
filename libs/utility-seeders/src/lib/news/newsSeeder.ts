import db from "@rfm/dexie-database";

export async function seedNews() {
  await db.news.put({
    title: "Welcome to the game!",
    message: "",
  });
}
