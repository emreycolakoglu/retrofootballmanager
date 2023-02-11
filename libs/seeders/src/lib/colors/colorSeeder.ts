import db from "@rfm/dexie-database";

export async function seedColors(): Promise<void> {
  const colors = [
    { name: "Beige", value: "#F5F5DC" },
    { name: "Black", value: "#000000" },
    { name: "BlanchedAlmond", value: "#FFEBCD" },
    { name: "Blue", value: "#0000FF" },
    { name: "Brown", value: "#A52A2A" },
    { name: "Bisque", value: "#FFE4C4" },
    { name: "Cyan", value: "#00FFFF" },
    { name: "Gold", value: "#FFD700" },
    { name: "Gray", value: "#808080" },
    { name: "Green", value: "#00FF00" },
    { name: "Indigo", value: "#4B0082" },
    { name: "Khaki", value: "#F0E68C" },
    { name: "Lime", value: "#00FF00" },
    { name: "Maroon", value: "#800000" },
    { name: "Moccasin", value: "#FFE4B5" },
    { name: "Navy", value: "#000080" },
    { name: "NavajoWhite", value: "#FFDEAD" },
    { name: "Orange", value: "#FFA500" },
    { name: "PapayaWhip", value: "#FFEFD5" },
    { name: "PeachPuff", value: "#FFDAB9" },
    { name: "Pink", value: "#FF69B4" },
    { name: "Plum", value: "#DDA0DD" },
    { name: "Peru", value: "#CD853F" },
    { name: "Purple", value: "#800080" },
    { name: "Red", value: "#FF0000" },
    { name: "Silver", value: "#C0C0C0" },
    { name: "Teal", value: "#008080" },
    { name: "Turquoise", value: "#40E0D0" },
    { name: "Violet", value: "#EE82EE" },
    { name: "Wheat", value: "#F5DEB3" },
    { name: "White", value: "#FFFFFF" },
    { name: "Yellow", value: "#FFFF00" },
  ];

  await db.colors.bulkPut(colors);
}
