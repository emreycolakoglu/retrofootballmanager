export function convertGiniToPrestige(giniValue: number) {
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
