import db from "@rfm/feature-database";

export async function seedNews() {
  await db.news.put({
    title: "Welcome to the game!",
    message: "",
  });
}
