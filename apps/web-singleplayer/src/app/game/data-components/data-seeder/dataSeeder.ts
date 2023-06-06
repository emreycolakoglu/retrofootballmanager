import { useEffect, useState } from "react";
import { seedData } from "@rfm/utility-seeders";

export function useDataSeeder() {
  const [isSeeding, setIsSeeding] = useState(false);

  useEffect(() => {
    if (isSeeding) return;
    _seedData();
  }, [isSeeding]);

  async function _seedData() {
    setIsSeeding(true);
    await seedData();
    setIsSeeding(false);
  }

  return {
    isSeeding,
  };
}
