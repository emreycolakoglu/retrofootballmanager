import db from "@rfm/dexie-database";

export async function seedColors(): Promise<void> {
  const colors = [
    {
      name: "Beige",
      value: "#F5F5DC",
    },
    {
      name: "Black",
      value: "#000000",
    },
    {
      name: "Blue",
      value: "#0000FF",
    },
    {
      name: "Brown",
      value: "#A52A2A",
    },
    {
      name: "Crimson",
      value: "#DC143C",
    },
    {
      name: "Gold",
      value: "#FFD700",
    },
    {
      name: "Gray",
      value: "#808080",
    },
    {
      name: "Green",
      value: "#00FF00",
    },
    {
      name: "Indigo",
      value: "#4B0082",
    },
    {
      name: "Khaki",
      value: "#F0E68C",
    },
    {
      name: "Lavender",
      value: "#E6E6FA",
    },
    {
      name: "Lime",
      value: "#00FF00",
    },
    {
      name: "Maroon",
      value: "#800000",
    },
    {
      name: "Mint",
      value: "#98FB98",
    },
    {
      name: "Navy",
      value: "#000080",
    },
    {
      name: "Olive",
      value: "#808000",
    },
    {
      name: "Orange",
      value: "#FFA500",
    },
    {
      name: "Peach",
      value: "#FFE5B4",
    },
    {
      name: "Pink",
      value: "#FFC0CB",
    },
    {
      name: "Plum",
      value: "#DDA0DD",
    },
    {
      name: "Purple",
      value: "#800080",
    },
    {
      name: "Red",
      value: "#FF0000",
    },
    {
      name: "Salmon",
      value: "#FA8072",
    },
    {
      name: "Silver",
      value: "#C0C0C0",
    },
    {
      name: "Sky blue",
      value: "#87CEEB",
    },
    {
      name: "Tan",
      value: "#D2B48C",
    },
    {
      name: "Teal",
      value: "#008080",
    },
    {
      name: "Turquoise",
      value: "#40E0D0",
    },
    {
      name: "Violet",
      value: "#EE82EE",
    },
  ];

  await db.colors.bulkPut(colors);
}
