import { CSC } from "./interfaces";

export async function fetchCSCCountries(): Promise<CSC.Country[]> {
  const rawResponse = await fetch(
    "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bcities.json",
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const response: CSC.Country[] = await rawResponse.json();
  return response;
}
